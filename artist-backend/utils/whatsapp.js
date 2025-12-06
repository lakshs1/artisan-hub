// utils/whatsapp.js
const axios = require("axios");

async function sendWhatsAppToAdmin(message) {
  try {
    await axios.post(
      `https://graph.facebook.com/v20.0/${process.env.WA_PHONE_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: process.env.ADMIN_NUMBER,
        type: "text",
        text: { body: message },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WA_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ WhatsApp message sent to admin");
  } catch (err) {
    console.error("❌ Error sending WhatsApp:", err.response?.data || err.message);
  }
}

module.exports = { sendWhatsAppToAdmin };
