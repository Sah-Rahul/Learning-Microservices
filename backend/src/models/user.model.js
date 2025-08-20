import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true, // Only if you provide IDs (e.g. Firebase UID)
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    recentSearchedCities: [{ type: String, required: true }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
