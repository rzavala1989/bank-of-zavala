"use strict";

/**
 * form controller
 */

//send form data to email
const sendForm = async (ctx) => {
  try {
    const data = ctx.request.body;
    const settings = await strapi.services.settings.findOne();
    const formSendTo = settings.send_emails_to || "admin@example.com";
    await strapi.plugins["email"].services.email.send({
      to: formSendTo,
      from: data.from,
      subject: `Contact form submission from ${data.from}`,
      text: data.content,
    });
    ctx.send({ message: "Email sent", ok: true });
  } catch (error) {
    strapi.services.errors.throwError(400, error.message);
  }
};

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::form.form", {
  sendForm,
});
