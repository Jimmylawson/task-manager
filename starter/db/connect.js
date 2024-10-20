const mongoose = require("mongoose");

const connectDb = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected TO DB");
  } catch (error) {
    console.log("Error connecting to DB: ", error);
  }
};

module.exports = connectDb;
