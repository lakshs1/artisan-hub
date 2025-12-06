// routes/enquiry.js
const express = require("express");
const router = express.Router();
const { sendWhatsAppToAdmin } = require("../utils/whatsapp");

// POST /api/enquiry
router.post("/", async (req, res) => {
    console.log("🔥 RECEIVED BODY:", req.body);
  try {
    
    const { name, email, type, budget, message, artworktitle, number } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email and message are required" });
    }

    // Build WhatsApp text
    const waText = `
📩 New Enquiry From Your Website

👤 Name: ${name}
📧 Email: ${email}
📂 Type: ${type || "not specified"}
🖼️ artwork: ${artworktitle || "couldn't fetch"}
☎️ phone number: ${number || "not specified"}
💰 Budget: ${budget || "not specified"}

📝 Message:
${message}
`.trim();

    // Send to your WhatsApp
    await sendWhatsAppToAdmin(waText);

    // (Optional) you could also save in DB later, but not today
    return res.json({ success: true, message: "Enquiry sent successfully" });
  } catch (err) {
    console.error("Enquiry error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;

