import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Activity from "../components/Activity";
import Overview from "../components/Overview";
import FitnessGoal from "../components/FitnessGoal";
import Trainer from "../components/Trainer";
import RecommendedActivity from "../components/RecommendedActivity";
import HeartRate from "../components/HeartRate";
import Output from "../components/Output";
import RecommendedFood from "../components/RecommendedFood";

export default function Dashboard2() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Sidebar */}
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <div className="ml-20 w-full">
          {/* Header */}
          <Header />

          {/* Main Dashboard */}
          <div className="p-6 space-y-8">
            {/* Activities Section */}
            <div className="grid grid-cols-3 gap-6">
              {/* Activity */}
              <Activity />

              {/* Overview */}
              <Overview />

              {/* Fitness Goal */}
              <FitnessGoal />
            </div>

            {/* Trainer and Heart Rate Section */}
            <div className="grid grid-cols-3 gap-6">
              {/* Trainer */}
              <Trainer />

              {/* Recommended Activity */}
              <RecommendedActivity />

              {/* Heart Rate */}
              <HeartRate />
            </div>

            {/* Output and Food Section */}
            <div className="grid grid-cols-3 gap-6">
              {/* Output */}
              <Output />

              {/* Recommended Food */}
              <RecommendedFood />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
