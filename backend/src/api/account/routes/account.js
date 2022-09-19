"use strict";

/**
 * account router
 */
//Get single Account
//Get all Accounts

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::account.account", {
  routes: [
    {
      method: "GET",
      path: "accounts/my",
      handler: "account.findMyAccount",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
    {
      method: "GET",
      path: "accounts/:accountId",
      handler: "account.findSingleAccount",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
  ],
});
