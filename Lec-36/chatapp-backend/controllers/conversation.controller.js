const ConversationModel = require("../models/conversation.model");

module.exports.getAll = async (req, res) => {
  try {
    const userId = req.user.id;

    const conversations = await ConversationModel.find({
      participants: userId
    })
      .populate({
        path: "participants",
        select: "_id fullName email",
        match: {_id: { $ne: userId }}
      })
      .populate({
        path: "lastMessage",
        select: "content from createdAt",
      })
      .sort({updatedAt: -1});

    res.status(200).json({
      success: true,
      data: conversations
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong fetching all conversations",
      error: error.message
    })
  }
}

module.exports.getOrCreate = async (req, res) => {
  try {
    const senderId = req.user.id;
    const receiverId = req.body.receiverId;

    if(!receiverId) {
      return res.status(400).json({
        success: false,
        message: "receiverId is required"
      })
    }

    let conversation = await ConversationModel.findOne({
      participants: {$all : [senderId, receiverId]}
    })
      .populate({
        path: "participants",
        select: "fullName email",
        match: {_id: { $ne: senderId }}
      });

    if(conversation){
      return res.status(200).json({
        success: true,
        data: conversation
      })
    }

    conversation = await ConversationModel.create({
      participants: [senderId, receiverId].sort()
    })

    conversation = await conversation.populate({
      path: "participants",
      select: "fullName email",
      match: {_id: { $ne: senderId }}
    })

    return res.status(201).json({
      success: true,
      data: conversation
    })
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Cannot get or Create conversation",
      error: error.message
    })
  }
}