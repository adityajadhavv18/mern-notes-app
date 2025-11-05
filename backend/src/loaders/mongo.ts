import mongoose from "mongoose";
import config from "../config";

export const connectDB = async () => {
  const uri = config.mongoUri;
  if (!uri) {
    throw new Error("MONGO_URI is not set in environment");
  }

  await mongoose.connect(uri, {
    // options are optional in newer mongoose
  } as mongoose.ConnectOptions);

  console.log("Connected to MongoDB");
};
