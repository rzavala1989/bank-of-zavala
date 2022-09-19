"use strict";

// Get all user transfers
// Get single transfer
// Create transfer

// Get all user messages
const getMyTransfers = async (ctx) => {
  try {
    const {
      state: { user },
    } = ctx;
    const myTransfers = await strapi.services.transfers.find({
      sender: user.id,
    });
    //determine if we have any messages
    if (myTransfers.length === 0) {
      return ctx.send({
        message: "You have no tranfers",
      });
    }
    ctx.send(myTransfers);
  } catch (error) {
    strapi.services.errors.throwError(error.message, 500);
  }
};
// Get single message
const getSingleTransfer = async (ctx) => {
  try {
    const {
      state: { user },
    } = ctx;
    const { transferId } = ctx.params;
    const myTransfer = await strapi.services.transfers.findOne({
      send: user.id,
      id: transferId,
    });
    //determine if we have any messages
    if (!myTransfer) {
      return ctx.send({
        message: "No transfer found",
      });
    }
    ctx.send(myTransfer);
  } catch (error) {
    strapi.services.errors.throwError(error.message, 500);
  }
};
const createValidations = require("./transfer-validations");
const create = async (ctx) => {
  try {
    const {
      state: { user },
    } = ctx;
    const data = ctx.request.body;
    const { source_account } = data;

    //Before we get started handle validation errors

    await strapi.services.errors.handleValidationErrors(
      data,
      createValidations
    );

    //Does user have access to source account?
    const userHasAccount = await strapi.services.accounts.findOne({
      owner: user.id,
      id: source_account,
    });
    if (!userHasAccount) {
      return ctx.throwError("You do not have access to this account", 403);
    }

    const createdTransfer = await strapi.services.transfers.create({
      ...data,
      sender: user.id,
    });
    ctx.send(createdTransfer);
  } catch (error) {
    strapi.services.errors.throwError(error.message, 500);
  }
};

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::transfer.transfer", {
  getMyTransfers,
  getSingleTransfer,
  create,
});
