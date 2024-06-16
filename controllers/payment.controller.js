// src/controllers/paymentController.js
const paymentService = require("../services/payment.service");

exports.createPayment = async (req, res) => {
  try {
    const { amount, currency, kind, profile_id, passthrough } = req.body;
    const payload = {
      amount,
      currency,
      kind,
      profile_id,
      passthrough: JSON.stringify(passthrough),
    };
    const response = await paymentService.createInvoice(payload);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
