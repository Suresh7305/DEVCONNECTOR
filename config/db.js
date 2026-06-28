const mongoose = require("mongoose");
const config = require("config");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
