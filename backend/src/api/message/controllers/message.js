"use strict";

// Get all user messages
const getMyMessages = async (ctx) => {
  try {
    const {
      state: { user },
    } = ctx;
    const myMessages = await strapi.services.messages.find({
      recipient: user.id,
    });
    //determine if we have any messages
    if (myMessages.length === 0) {
      return ctx.send({
        message: "You have no messages",
      });
    }
    ctx.send(myMessages);
  } catch (error) {
    strapi.services.errors.throwError(error.message, 500);
  }
};
// Get single message
const getSingleMessage = async (ctx) => {
  try {
    const {
      state: { user },
    } = ctx;
    const { messageId } = ctx.params;
    const myMessage = await strapi.services.messages.findOne({
      recipient: user.id,
      id: messageId,
    });
    //determine if we have any messages
    if (!myMessage) {
      return ctx.send({
        message: "No message found",
      });
    }
    ctx.send(myMessage);
  } catch (error) {
    strapi.services.errors.throwError(error.message, 500);
  }
};

// Toggle read status
const toggleReadStatus = async (ctx) => {
  try {
    const {
    state: { user },
  } = ctx;
  const { messageId } = ctx.params;
  //find indivudal message, determine if it belongs to user/and is it read
  const myMessage = await strapi.services.messages.findOne({
    recipient: user.id,
    id: messageId,
  });
  //determine if we have msg
  if (!myMessage) {
    return ctx.send({
      message: "No message found",
    });
  }

  //Run an update on this message
  const updates = {};
  const newIsReadStatus = !myMessage.is_read;
  update.is_read = newIsReadStatus;

  // final save
  const updatedMessage = await strapi.services.messages.update(
    { id: messageId },
    { ...updates }
  );
  //send back updated message, the ONLY PART thats changed
  ctx.send({ is_read: newIsReadStatus });
  } catch (error) {
    strapi.services.errors.throwError(error.message, 500);
  }
  
};
// Delete message
const remove = async (ctx) => {
  try {
    const {
      state: { user },
    } = ctx;
    const { messageId } = ctx.params;
    const myMessage = await strapi.services.messages.findOne({
      recipient: user.id,
      id: messageId,
    });
    //determine if we have msg
    if (!myMessage) {
      return ctx.send({
        message: "No message found",
      });
    }
    //delete message
    const deleteMessage = await strapi.services.messages.delete({id: myMessage.id});
    ctx.send(deleteMessage);
  } catch (error) {
    strapi.services.errors.throwError(error.message, 500);
  }
};

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::message.message", {
  getMyMessages,
  getSingleMessage,
  toggleReadStatus,
  remove,
});
