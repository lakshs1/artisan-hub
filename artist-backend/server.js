const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// health test
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend working 👌" });
});

// enquiry route
app.use("/api/enquiry", require("./routes/enquiry"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Backend started on port ${port}`);
});
