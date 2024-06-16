// index.js
const express = require("express");

require("dotenv").config({
  path: ".env",
});

const app = express();
const port = process.env.PORT;
const paymentRoutes = require("./routes/payments.route");

app.use(express.json());
app.use("/api/payments", paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
