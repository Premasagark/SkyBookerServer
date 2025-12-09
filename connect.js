import mongoose from "mongoose";

const mongoURI =
  process.env.MONGODB_URL ||
  "mongodb+srv://prem:MongoDB25@cluster0.jzra2it.mongodb.net/flightBookingDB";
export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        // process.exit(1);
    }
};

// Note: Make sure to install the 'dotenv' package and create a .env file with MONGODB_URL variable for this to work.
export default connectDB;