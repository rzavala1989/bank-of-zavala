"use strict";

/**
 * card router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::card.card", {
  routes: [
    {
      method: "GET",
      path: "cards/my",
      handler: "card.findMyCards",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
    {
      method: "GET",
      path: "cards/:cardId",
      handler: "card.findSingleCard",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
    {
      method: "PUT",
      path: "cards/:cardId/pin",
      handler: "card.updatePin",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
    {
      method: "PUT",
      path: "cards/:cardId/limit",
      handler: "card.updateLimit",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
  ],
});
