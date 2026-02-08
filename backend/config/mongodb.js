import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Database Connected"));
    mongoose.connection.on("error", (err) => console.error("DB Error:", err));

    if (!process.env.MONGODB_URI) {
      console.error("ERROR: MONGODB_URI is not defined in environment variables");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "CareMate",
    });
  } catch (err) {
    console.error("Failed to connect to DB:", err.message);
    console.error("Make sure MONGODB_URI is set in .env on Render dashboard");
  }
};

export default connectDB;
