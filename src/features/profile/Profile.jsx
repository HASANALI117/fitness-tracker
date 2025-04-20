import React, { useState } from "react";
import Sidebar from "../dashboard/components/Sidebar";
import {
  Camera,
  Save,
  Edit2,
  Lock,
  Mail,
  User,
  MapPin,
  Calendar,
} from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    location: "Manama, Bahrain",
    dob: "1992-06-15",
    height: "175 cm",
    weight: "68 kg",
    gender: "Male",
    goal: "Build Muscle & Strength",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data logic would go here
    setIsEditing(false);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="ml-20 w-full">
          {/* Header */}
          <header className="flex justify-between items-center p-6 border-b border-gray-800">
            <div>
              <h1 className="text-2xl font-bold">Profile</h1>
              <p className="text-gray-400">
                Manage your personal information and preferences
              </p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-4 py-2 rounded-md font-medium ${
                isEditing ? "bg-gray-700 text-white" : "bg-lime-400 text-black"
              }`}
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </header>

          <div className="p-6 space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {/* Profile Picture Section */}
              <div className="bg-gray-900/80 rounded-lg p-6 flex flex-col items-center">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
                    alt="Profile"
                    className="w-48 h-48 rounded-full object-cover"
                  />
                  {isEditing && (
                    <div className="absolute bottom-0 right-0 bg-lime-400 p-2 rounded-full text-black cursor-pointer">
                      <Camera size={20} />
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold mt-4">{userData.name}</h2>
                <p className="text-gray-400 flex items-center mt-1">
                  <MapPin size={16} className="mr-1" /> {userData.location}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 w-full">
                  <div className="bg-black/40 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-400">Height</div>
                    <div className="font-medium">{userData.height}</div>
                  </div>
                  <div className="bg-black/40 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-400">Weight</div>
                    <div className="font-medium">{userData.weight}</div>
                  </div>
                </div>
              </div>

              {/* Profile Details Section */}
              <div className="col-span-2 bg-gray-900/80 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6">Personal Information</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 flex items-center">
                        <User size={16} className="mr-2" /> Full Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="name"
                          value={userData.name}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
                        />
                      ) : (
                        <div className="font-medium">{userData.name}</div>
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
                          value={userData.email}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
                        />
                      ) : (
                        <div className="font-medium">{userData.email}</div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 flex items-center">
                        <Calendar size={16} className="mr-2" /> Date of Birth
                      </label>
                      {isEditing ? (
                        <input
                          type="date"
                          name="dob"
                          value={userData.dob}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
                        />
                      ) : (
                        <div className="font-medium">
                          {new Date(userData.dob).toLocaleDateString()}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 flex items-center">
                        <MapPin size={16} className="mr-2" /> Location
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="location"
                          value={userData.location}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
                        />
                      ) : (
                        <div className="font-medium">{userData.location}</div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Gender</label>
                      {isEditing ? (
                        <select
                          name="gender"
                          value={userData.gender}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      ) : (
                        <div className="font-medium">{userData.gender}</div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">
                        Fitness Goal
                      </label>
                      {isEditing ? (
                        <select
                          name="goal"
                          value={userData.goal}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
                        >
                          <option value="Build Muscle & Strength">
                            Build Muscle & Strength
                          </option>
                          <option value="Lose Weight">Lose Weight</option>
                          <option value="Improve Endurance">
                            Improve Endurance
                          </option>
                          <option value="Maintain Fitness">
                            Maintain Fitness
                          </option>
                        </select>
                      ) : (
                        <div className="font-medium">{userData.goal}</div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">
                        Height (cm)
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="height"
                          value={userData.height}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
                        />
                      ) : (
                        <div className="font-medium">{userData.height}</div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">
                        Weight (kg)
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="weight"
                          value={userData.weight}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-lime-400"
                        />
                      ) : (
                        <div className="font-medium">{userData.weight}</div>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="pt-4 border-t border-gray-800 flex justify-end space-x-4">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-gray-600 rounded-md text-gray-400"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-lime-400 text-black rounded-md font-medium flex items-center"
                      >
                        <Save size={18} className="mr-2" /> Save Changes
                      </button>
                    </div>
                  )}
                </form>

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
            <div className="bg-gray-900/80 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Fitness Statistics</h3>
              <div className="grid grid-cols-4 gap-6">
                <div className="bg-black/40 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-400">
                    Workouts Completed
                  </div>
                  <div className="text-2xl font-bold text-lime-400">38</div>
                </div>
                <div className="bg-black/40 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-400">Total Hours</div>
                  <div className="text-2xl font-bold text-lime-400">24.5</div>
                </div>
                <div className="bg-black/40 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-400">
                    Avg. Calories Burned
                  </div>
                  <div className="text-2xl font-bold text-lime-400">324</div>
                </div>
                <div className="bg-black/40 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-400">Progress</div>
                  <div className="text-2xl font-bold text-lime-400">76%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
