import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {  
      useUnifiedTopology: true, 
      serverSelectionTimeoutMS: 60000 // Increase timeout to 30 seconds
    });
    console.log(`MongoDB connected:`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
