const MessageModel = require("../models/message.model");
const ConversationModel = require("../models/conversation.model");

module.exports.getMessages = async (req, res) => {
  try {
    let { page = 1, limit = 20 } = req.query;
    const { conversationId } = req.params;
    const userId = req.user.id;

    page = parseInt(page);
    limit = parseInt(limit);

    if (!conversationId) {
      return res.status(400).json({
        success: false,
        message: "conversationId is required",
      });
    }

    const conversation = await ConversationModel.findOne({
      _id: conversationId,
      participants: userId,
    });

    if (!conversation) {
      return res.status(400).json({
        success: false,
        message: "Access denied",
      });
    }

    const skip = (page - 1) * limit;
    const messages = await MessageModel.find({
      conversationId,
    })
      .skip(skip)
      .limit(limit)
      .populate({
        path: "from",
        select: "_id fullName email",
      })
      .populate({
        path: "to",
        select: "_id fullName email",
      })
      .sort({ createdAt: -1 });

    const total = await MessageModel.countDocuments({ conversationId });
    const hasMore = page * limit < total;

    res.status(200).json({
      success: true,
      data: {
        messages,
        hasMore,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong fetching messages",
      error: error.message,
    });
  }
};

module.exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, content, conversationId } = req.body;
    const senderId = req.user.id;

    if(!receiverId|| !content.trim()) {
      return res.status(400).json({
        success: false,
        message: "receiverId, content is required",
      });
    };

    let conversation = await ConversationModel.findOne({
      _id: conversationId,
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      return res.status(400).json({
        success: false,
        message: "conversation not found",
      });
    }

    // create message
    let message = await MessageModel.create({
      conversationId,
      to: receiverId,
      from: senderId,
      content,
    });
    message = await message.populate([
      { path: "to", select: "_id email fullName" },
      { path: "from", select: "_id email fullName" },
    ]);

    // update lastMesasge in conversation
    await ConversationModel.findByIdAndUpdate(conversationId, {
      lastMessage: message._id,
      updatedAt: new Date(),
    });

    conversation = await ConversationModel.findById(conversationId).populate([
      {
        path: "participants",
        select: "_id fullName email",
      },
      {
        path: "lastMessage",
        select: "content from createdAt"
      }
    ]);

    const convo = conversation.toObject();

    // send message to receiver using socket
    const io = req.app.get("io");
    io.to(receiverId).emit("message:new", {
      conversation: {
        ...convo,
        participants: convo.participants.filter(u => u._id.equals(senderId))
      },
      message,
    });

    res.status(201).json({
      success: true,
      data: {
        conversation: {
          ...convo,
          participants: convo.participants.filter(u => !u._id.equals(senderId))
        },
        message,
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong in sending message",
      error: error.message,
    });
  }
};
