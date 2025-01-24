import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); t
  }
};

export default db;
