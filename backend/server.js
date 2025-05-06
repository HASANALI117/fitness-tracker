import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Routes
import authRoutes from "./routes/authRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import nutritionRoutes from "./routes/nutritionRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Add health check endpoint
app.get("/api/health", (req, res) => {
  const dbState = mongoose.connection.readyState;
  const dbStatus = {
    0: "Disconnected",
    1: "Connected",
    2: "Connecting",
    3: "Disconnecting",
  };

  res.status(200).json({
    status: "success",
    db: { status: dbStatus[dbState], state: dbState },
    env: process.env.NODE_ENV || "not set",
  });
});

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "https://fitness-zone-three.vercel.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

// Improved MongoDB connection for serverless
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      // These options help with serverless environments
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 0,
      connectTimeoutMS: 10000,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

// Connect to MongoDB
connectToDatabase();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/workout", workoutRoutes);
app.use("/api/nutrition", nutritionRoutes);
app.use("/api/user", userRoutes);

// For local development only
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel
export default app;
