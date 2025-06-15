require('dotenv').config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require("fs");

const connectDB = require("./Config/db");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDB();

    readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Server start failed:", err);
  }
};

startServer();
