import React, { useState, useContext } from "react";
import { UserContext } from "../../../utils/ProtectedRoutes";
import Sidebar from "../../../components/Sidebar";
import ProfileForm from "../components/ProfileForm";
import { Lock } from "lucide-react";
import FitnessStats from "../components/FitnessStats";
import ProfileCard from "../components/ProfileCard";
import Header from "../../../components/Header";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { user, loading } = useContext(UserContext);

  const handleProfileUpdate = () => {
    // You can update the user context here if needed
    setSuccessMessage("Profile updated successfully");

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-lime-400"></div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="ml-20 w-full">
          {/* Header */}
          <Header
            title="Profile"
            subtitle="Manage your personal information"
            actionButton={
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-md font-medium ${
                  isEditing
                    ? "bg-gray-700 text-white"
                    : "bg-lime-400 text-black"
                }`}
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            }
          />

          {successMessage && (
            <div className="mx-6 mt-4 bg-green-900/50 border border-green-500 text-white p-3 rounded">
              {successMessage}
            </div>
          )}

          <div className="p-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Picture Section */}
              <ProfileCard user={user} isEditing={isEditing} />

              {/* Profile Details Section */}
              <div className="md:col-span-2 bg-gray-900/80 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6">Personal Information</h3>

                {/* Using our new ProfileForm component */}
                <ProfileForm
                  userData={user}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  onProfileUpdate={handleProfileUpdate}
                />

                {!isEditing && (
                  <div className="mt-8 pt-4 border-t border-gray-800">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <Lock size={18} className="mr-2" /> Security
                    </h3>
                    <button className="px-4 py-2 border border-gray-700 rounded-md text-gray-300">
                      Change Password
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Fitness Stats Section */}
            <FitnessStats />
          </div>
        </div>
      </div>
    </div>
  );
}
