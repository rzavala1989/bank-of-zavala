"use strict";

/**
 * message router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::message.message", {
  routes: [
    {
      method: "GET",
      path: "messages/my",
      handler: "account.getMyMessages",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
    {
      method: "GET",
      path: "messages/:messageId",
      handler: "account.getSingleMessage",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
    {
      method: "PUT",
      path: "messages/:messageId/toggle-read",
      handler: "account.toggleReadStatus",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
    {
      method: "DELETE",
      path: "messages/:messageId/delete",
      handler: "account.remove",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
  ],
});
