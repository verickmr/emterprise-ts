import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  const url = process.env.MONGODB_URL;

  if (!url) {
    throw new Error("MONGODB_URL not provided in .env");
  }

  if (isConnected) {
    console.log("MongoDB already connected.");
    return;
  }

  try {
    console.log("Connecting to MongoDB with Mongoose...");

    const connection = await mongoose.connect(url);

    isConnected = !!connection.connections[0].readyState;

    console.log("✔ Connected to MongoDB!");

  } catch (error) {
    console.error("❌ MongoDB connection failed");
    console.error(error);
    process.exit(1);
  }
};

export { mongoose }; // 🔥 agora seus models usam sempre a mesma instancia
