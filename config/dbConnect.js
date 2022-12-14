const mongoose = require("mongoose");

const uri = process.env.NEXT_PUBLIC_MONGO_URI;

export default async function dbConnect() {
  try {
    mongoose.connect(uri);
  } catch (error) {
    console.log(error);
  }
}
