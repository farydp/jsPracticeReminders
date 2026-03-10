const mongoose = require("mongoose");

const connectDB = async (mongoUri) => {
  if(!mongoUri){
    throw new Error("MongoUri wasn't provided")
  }

  mongoose.connect(mongoUri)
}

module.exports = connectDB;