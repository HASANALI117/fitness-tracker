import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number },
    height: { type: Number }, // in cm
    weight: { type: Number }, // in kg
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Optional: Track weight changes over time
    weightHistory: [
      {
        weight: Number,
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
