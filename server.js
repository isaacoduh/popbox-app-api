const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/products", require("./routes/product.routes"));

const port = process.env.PORT || 9500;
app.listen(port, () => {
  console.log(
    `Server Running on ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .bgMagenta.white
  );
});
