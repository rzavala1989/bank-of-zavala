"use strict";

/**
 * account controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::account.account", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async getMyAccount(ctx) {
    try {
      const { id } = ctx.state.user;
      const account = await strapi.services.account.findOne({ id });
      return account;
    } catch (err) {
      strapi.services.errors.throwError(err.message, 400);
    }
  },

  // Method 2: Wrapping a core action (leaves core logic in place)
  async getSingleAccount(ctx) {
    try {
      const currentUser = ctx.state.user;
      const { accountId } = ctx.params;

      //rule out my account
      const myAccount = await strapi.services.account.findOne({
        id: accountId,
        owner: currentUser.id,
      });
      if (!myAccount) {
        strapi.services.errors.throwError("Account not found", 404);
      }
    } catch (error) {
      strapi.services.errors.throwError("No account exists", 400);
    }
  },
}));
