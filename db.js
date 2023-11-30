const mongoose = require('mongoose');

let isConnected = false;

async function  connectToDatabase(){
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_DB_URL) return console.log("Missing MONGO_DB_URL");
  if (isConnected) {
    console.log("MongoDB is already connected");
  }
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "ies",
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};
module.exports = connectToDatabase;
