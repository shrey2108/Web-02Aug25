const ConversationModel = require("../models/conversation.model");
const MessageModel = require("../models/message.model");
const EVENTS = require("./events");

/**
 * 
 * data: {"to": objectId, "content": String}
 */
async function sendMessage({io, userId, data}) {
  try {
    const { to, content } = data;
    console.log(to, content);
    if( userId === to) throw new Error("Cannot send message to yourself");

    const convo = await getOrCreateConversation([userId, to]);

    const msg = await MessageModel.create({
      from: userId,
      to: to,
      content,
      conversationId: convo._id,
    });

    io.to(to).emit(EVENTS.MESSAGE_NEW, msg);
    io.to(userId).emit(EVENTS.MESSAGE_NEW, msg);

  } catch (error) {
    console.log(error);
  }
}


async function getOrCreateConversation(ids) {
  const [userId1, userId2] = ids;
  const userIds = [userId1, userId2].sort();
  console.log(userIds)

  let convo = null;
  convo = await ConversationModel.findOne({
    userIds: {
      $all: userIds
    }
  })

  if(!convo) {
    convo = await ConversationModel.create({
      userIds,
      createdAt: Date.now(),
      updatedAt: Date.now()
    })
  }

  return convo;
}


module.exports = {
  sendMessage
}