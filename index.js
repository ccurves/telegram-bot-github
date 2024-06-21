// index.js
const express = require("express");

require("dotenv").config({
  path: ".env",
});

const app = express();
const port = process.env.PORT;
const paymentRoutes = require("./routes/payments.route");

app.use(express.json());

// Routes
app.get("/api", (req, res) => {
  res.send("Gateway API Route");
});
app.use("/api/payments", paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
