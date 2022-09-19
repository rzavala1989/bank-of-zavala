"use strict";

/**
 * transfer router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::transfer.transfer", {
  routes: [
    {
      method: "GET",
      path: "transfers/my",
      handler: "account.getMyTransfers",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
    {
      method: "GET",
      path: "transfers/:transferId",
      handler: "account.getSingleTransfer",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
    {
      method: "POST",
      path: "/transfers",
      handler: "account.create",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
  ],
});
