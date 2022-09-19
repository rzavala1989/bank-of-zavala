"use strict";

/**
 * form router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::form.form", {
  routes: [
    {
      method: "POST",
      path: "/forms",
      handler: "form.sendForm",
      config: {
        policies: ["global::pass-jwt-user"],
      },
    },
  ],
});
