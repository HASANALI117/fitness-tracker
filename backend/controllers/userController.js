import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// Get current user profile (READ)
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update user profile (UPDATE)
export const updateProfile = async (req, res) => {
  try {
    const { first_name, last_name, age, height, weight } = req.body;

    // Build update object with only provided fields
    const updateFields = {};
    if (first_name) updateFields.first_name = first_name;
    if (last_name) updateFields.last_name = last_name;
    if (age) updateFields.age = age;
    if (height) updateFields.height = height;
    if (weight) {
      updateFields.weight = weight;
      // Add to weight history if weight changed
      updateFields.$push = {
        weightHistory: { weight, date: Date.now() },
      };
    }

    const user = await User.findByIdAndUpdate(req.user._id, updateFields, {
      new: true,
      runValidators: true,
    }).select("-password");

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete user account (DELETE)
export const deleteAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);

    // Clear the cookie
    res.clearCookie("token");

    res.status(200).json({
      status: "success",
      message: "User account deleted successfully",
    });
  } catch (error) {
    console.error("Delete account error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Change password
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user._id);

    // Validate current password
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({
      status: "success",
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Change password error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
