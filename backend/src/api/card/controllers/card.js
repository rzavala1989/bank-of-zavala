"use strict";

/**
 * card controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::card.card", ({ strapi }) => ({
  // Method 1: Get my cards
  async findMyCards(ctx) {
    try {
      const { id } = ctx.state.user;
      const cards = await strapi.services.card.find({ owner: id });
      return cards;
    } catch (err) {
      strapi.services.errors.throwError(err.message, 400);
    }
  },
  // Method 2: Get single card
  async findSingleCard(ctx) {
    try {
      const currentUser = ctx.state.user;
      const { cardId } = ctx.params;

      //rule out my card
      const myCard = await strapi.services.card.findOne({
        id: cardId,
        owner: currentUser.id,
      });
      if (!myCard) {
        strapi.services.errors.throwError("Card not found", 404);
      }
    } catch (error) {
      strapi.services.errors.throwError("No card exists", 400);
    }
  },
  // Method 3: Update pin
  async updatePin(ctx) {
    try {
      const currentUser = ctx.state.user;
      const { cardId } = ctx.params;
      const { pin } = ctx.request.body;

      //rule out my card
      const myCard = await strapi.services.card.findOne({
        id: cardId,
        owner: currentUser.id,
      });
      if (!myCard) {
        strapi.services.errors.throwError("Card not found", 404);
      }
      //Now we have our card, update the pin
      const updatedCard = await strapi.services.card.update(
        { id: cardId },
        { pin }
      );
      return updatedCard;
    } catch (error) {
      strapi.services.errors.throwError("No card exists", 400);
    }
  },
  // Method 4: Update limit
  async updateLimit(ctx) {
    try {
      const currentUser = ctx.state.user;
      const { cardId } = ctx.params;
      const { limit } = ctx.request.body;

      //rule out my card
      const myCard = await strapi.services.card.findOne({
        id: cardId,
        owner: currentUser.id,
      });
      if (!myCard) {
        strapi.services.errors.throwError("Card not found", 404);
      }
      //Now we have our card, update the limit
      const updatedCard = await strapi.services.card.update(
        { id: cardId },
        { limit }
      );
      return updatedCard;
    } catch (error) {
      strapi.services.errors.throwError("No card exists", 400);
    }
  },
}));
