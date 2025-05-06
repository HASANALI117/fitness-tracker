import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../utils/ProtectedRoutes";
import { motion } from "framer-motion";
import axios from "axios";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import ProfileCard from "../components/ProfileCard";
import ProfileForm from "../components/ProfileForm";
import FitnessStats from "../components/FitnessStats";
import Message from "../components/Message";
import { Edit2, User } from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [statsExpanded, setStatsExpanded] = useState(true);
  const { user, loading, setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    height: "",
    weight: "",
    age: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  // Mock fitness stats data
  const [fitnessStats, setFitnessStats] = useState({
    workoutsCompleted: 24,
    totalHours: 18.5,
    avgCaloriesBurned: 320,
    progress: 68,
    streakDays: 5,
    achievements: [
      { name: "First Workout", date: "2023-01-15", icon: "🏋️" },
      { name: "Week Streak", date: "2023-02-10", icon: "🔥" },
      { name: "Weight Goal", date: "2023-03-05", icon: "🏆" },
    ],
  });

  // Update form data when user data changes
  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        height: user.height || "",
        weight: user.weight || "",
        age: user.age || "",
        current_password: "",
        new_password: "",
        confirm_password: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Convert numerical fields from strings to numbers
      const dataToSubmit = {
        ...formData,
        height: formData.height ? Number(formData.height) : undefined,
        weight: formData.weight ? Number(formData.weight) : undefined,
        age: formData.age ? Number(formData.age) : undefined,
      };

      // Remove password fields if they're empty
      if (!formData.current_password) {
        delete dataToSubmit.current_password;
        delete dataToSubmit.new_password;
        delete dataToSubmit.confirm_password;
      } else {
        // Validate passwords match
        if (formData.new_password !== formData.confirm_password) {
          setErrorMessage("New passwords don't match");
          return;
        }
      }

      const response = await axios.put(
        "http://localhost:5000/api/user/profile",
        dataToSubmit,
        {
          withCredentials: true,
        }
      );

      // Update user context
      setUser(response.data.data);
      setSuccessMessage("Profile updated successfully");
      setIsEditing(false);

      // Clear password fields
      setFormData((prev) => ({
        ...prev,
        current_password: "",
        new_password: "",
        confirm_password: "",
      }));
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message || "Failed to update profile"
      );
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-12 h-12 border-t-2 rounded-full animate-spin border-lime-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white bg-black">
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-20">
          {/* Header */}
          <Header
            title="Profile"
            subtitle="Manage your personal information"
            actionButton={
              !isEditing ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(true)}
                  className="flex items-center px-4 py-2 space-x-2 font-medium text-black rounded-lg bg-lime-400"
                >
                  <Edit2 size={16} />
                  <span>Edit Profile</span>
                </motion.button>
              ) : null
            }
          />

          {/* Messages */}
          <Message message={successMessage} type="success" />
          <Message message={errorMessage} type="error" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-6 space-y-8"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Profile Picture Section */}
              <motion.div variants={itemVariants}>
                <ProfileCard
                  user={user}
                  isEditing={isEditing}
                  fitnessStats={fitnessStats}
                />
              </motion.div>

              {/* Profile Details Section */}
              <motion.div
                variants={itemVariants}
                className="p-6 border border-gray-800 shadow-xl md:col-span-2 bg-gray-900/80 backdrop-blur-sm rounded-xl"
              >
                <h3 className="flex items-center mb-6 text-xl font-bold">
                  <User className="mr-2" /> Personal Information
                </h3>

                <ProfileForm
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                />
              </motion.div>
            </div>

            {/* Fitness Stats Section */}
            <motion.div variants={itemVariants}>
              <FitnessStats
                fitnessStats={fitnessStats}
                statsExpanded={statsExpanded}
                setStatsExpanded={setStatsExpanded}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
