import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
    });
    console.log(`MongoDB connected:`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
