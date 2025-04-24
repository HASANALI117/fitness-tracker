import React, { useState, useEffect } from "react";
import { Save, User, Mail } from "lucide-react";
import axios from "axios";

const ProfileForm = ({
  userData,
  isEditing,
  setIsEditing,
  onProfileUpdate,
}) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    height: "",
    weight: "",
    age: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Update form data when userData changes
  useEffect(() => {
    if (userData) {
      setFormData({
        first_name: userData.first_name || "",
        last_name: userData.last_name || "",
        email: userData.email || "",
        height: userData.height || "",
        weight: userData.weight || "",
        age: userData.age || "",
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Convert numerical fields from strings to numbers
      const dataToSubmit = {
        ...formData,
        height: formData.height ? Number(formData.height) : undefined,
        weight: formData.weight ? Number(formData.weight) : undefined,
        age: formData.age ? Number(formData.age) : undefined,
      };

      const response = await axios.put(
        "http://localhost:5000/api/user/profile",
        dataToSubmit,
        { withCredentials: true }
      );

      // Call the callback function to update parent state
      onProfileUpdate(response.data.data);
      setIsEditing(false);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-900/50 border border-red-500 text-white p-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-gray-400 flex items-center">
            <User size={16} className="mr-2" /> First Name
          </label>
          {isEditing ? (
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
            />
          ) : (
            <div className="font-medium">{formData.first_name}</div>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400 flex items-center">
            <User size={16} className="mr-2" /> Last Name
          </label>
          {isEditing ? (
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
            />
          ) : (
            <div className="font-medium">{formData.last_name}</div>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400 flex items-center">
            <Mail size={16} className="mr-2" /> Email
          </label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-gray-400 focus:outline-none"
            />
          ) : (
            <div className="font-medium">{formData.email}</div>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Age</label>
          {isEditing ? (
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
            />
          ) : (
            <div className="font-medium">{formData.age}</div>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Height (cm)</label>
          {isEditing ? (
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
            />
          ) : (
            <div className="font-medium">{formData.height}</div>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Weight (kg)</label>
          {isEditing ? (
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
            />
          ) : (
            <div className="font-medium">{formData.weight}</div>
          )}
        </div>
      </div>

      {isEditing && (
        <div className="pt-4 border-t border-gray-800 flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-400"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-lime-400 text-black rounded-md font-medium flex items-center disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              "Saving..."
            ) : (
              <>
                <Save size={18} className="mr-2" /> Save Changes
              </>
            )}
          </button>
        </div>
      )}
    </form>
  );
};

export default ProfileForm;
