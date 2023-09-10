const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const connectDB = require("./config/config");
const productModel = require("./models/product.model");
const products = require("./data");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await productModel.deleteMany();
    const sampleData = products.map((product) => {
      return { ...product };
    });

    await productModel.insertMany(sampleData);
    console.log(`Data Imported`.bgGreen.white);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    process.exit(1);
  }
};

const destroyData = () => {};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
