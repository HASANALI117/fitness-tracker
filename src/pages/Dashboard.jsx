import Sidebar from "../components/Sidebar";

import { Activity, Dumbbell, ArrowRight } from "lucide-react";

export default function Dashboard() {
  //   const [userName, setUserName] = useState("Smith Adam");
  const currentTime = new Date();
  const hours = currentTime.getHours();

  let greeting = "Good Morning";
  if (hours >= 12 && hours < 17) {
    greeting = "Good Afternoon";
  } else if (hours >= 17) {
    greeting = "Good Evening";
  }

  // Monthly activity data
  const activityData = [
    { month: "Jan", percentage: 30 },
    { month: "Feb", percentage: 70 },
    { month: "Mar", percentage: 50 },
    { month: "Apr", percentage: 60 },
    { month: "May", percentage: 12 },
    { month: "Jun", percentage: 11 },
    { month: "Jul", percentage: 10 },
    { month: "Aug", percentage: 0 },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Sidebar */}
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <div className="ml-20 w-full">
          {/* Header */}
          <header className="flex justify-between items-center p-6 border-b border-gray-800">
            <div>
              <p className="text-gray-400">{greeting}</p>
              <h1 className="text-2xl font-bold">Welcome Back</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center w-64">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none w-full text-white"
                />
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full absolute translate-x-3 -translate-y-3"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/api/placeholder/40/40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                {/* <span>{userName}</span> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </header>

          {/* Main Dashboard */}
          <div className="p-6 space-y-8">
            {/* Activities Section */}
            <div className="grid grid-cols-3 gap-6">
              {/* Activity */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Activity</h2>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>Monthly</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between h-48 items-end">
                    {activityData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="w-8 bg-gray-700 rounded-md"
                          style={{
                            height: `${data.percentage}%`,
                            backgroundColor:
                              index === 3
                                ? "rgba(255, 255, 255, 0.6)"
                                : "rgba(255, 255, 255, 0.2)",
                          }}
                        ></div>
                        <div className="mt-2 text-xs text-gray-400">
                          {data.month}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Overview</h2>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>Monthly</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-center mb-4">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.1)"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeDasharray="84, 100"
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-2xl font-bold">84%</div>
                        <div className="text-sm text-gray-400">1,290 ml</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          <span className="text-sm">Calories burn</span>
                        </div>
                        <div className="flex items-center">
                          <div className="text-sm font-medium">33.5%</div>
                          <div className="text-xs text-green-400 ml-2">
                            +1.25%
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span className="text-sm">Protein</span>
                        </div>
                        <div className="flex items-center">
                          <div className="text-sm font-medium">23.02%</div>
                          <div className="text-xs text-green-400 ml-2">
                            +3.43%
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          <span className="text-sm">Carbs</span>
                        </div>
                        <div className="flex items-center">
                          <div className="text-sm font-medium">11.24%</div>
                          <div className="text-xs text-green-400 ml-2">
                            +2.12%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fitness Goal */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Fitness goal</h2>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>Monthly</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-lime-200 rounded-lg p-2 text-black">
                    <div className="font-medium">Side planks</div>
                    <div className="text-sm">12 sets/day</div>
                    <div className="bg-lime-300 rounded px-2 py-1 text-xs inline-block mt-1">
                      Bravo
                    </div>
                    <div className="mt-2">
                      <img
                        src="/api/placeholder/100/80"
                        alt="Side plank"
                        className="w-full h-20 object-cover rounded"
                      />
                    </div>
                  </div>
                  <div className="bg-teal-400 rounded-lg p-2 text-black">
                    <div className="font-medium">Rope lifting</div>
                    <div className="text-sm">10 sets/day</div>
                    <div className="bg-teal-300 rounded px-2 py-1 text-xs inline-block mt-1">
                      Well
                    </div>
                    <div className="mt-2">
                      <img
                        src="/api/placeholder/100/80"
                        alt="Rope lifting"
                        className="w-full h-20 object-cover rounded"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-lg p-2 text-black">
                    <div className="font-medium">ABS & Stretch</div>
                    <div className="text-sm">10 minutes</div>
                    <div className="bg-red-300 rounded px-2 py-1 text-xs inline-block mt-1">
                      Great
                    </div>
                    <div className="mt-2">
                      <img
                        src="/api/placeholder/100/80"
                        alt="ABS"
                        className="w-full h-20 object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trainer and Heart Rate Section */}
            <div className="grid grid-cols-3 gap-6">
              {/* Trainer */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Trainer</h2>
                  <div className="text-gray-400 text-sm">
                    View all <ArrowRight className="h-4 w-4 inline" />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="bg-lime-200 rounded-lg p-3 text-black relative overflow-hidden w-40">
                    <div className="font-medium">John Arnold</div>
                    <div className="text-xs">Yoga expert</div>
                    <img
                      src="/api/placeholder/100/120"
                      alt="Trainer"
                      className="mt-6 w-full object-cover h-32"
                    />
                  </div>
                  <div className="bg-teal-400 rounded-lg p-3 text-black relative overflow-hidden w-40">
                    <div className="font-medium">Adam Smith</div>
                    <div className="text-xs">Fitness expert</div>
                    <img
                      src="/api/placeholder/100/120"
                      alt="Trainer"
                      className="mt-6 w-full object-cover h-32"
                    />
                  </div>
                </div>
              </div>

              {/* Recommended Activity */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Recommend activity</h2>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>Monthly</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-lime-300 p-2 rounded text-black">
                      <Dumbbell size={20} />
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm font-medium">
                        Fitness for beggineres
                      </div>
                      <div className="text-xs text-gray-400">
                        17 Feb, 2022 at 5:30 PM
                      </div>
                    </div>
                    <div>
                      <img
                        src="/api/placeholder/28/28"
                        alt="User"
                        className="w-7 h-7 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-teal-400 p-2 rounded text-black">
                      <Activity size={20} />
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm font-medium">
                        Beginner to advance gym
                      </div>
                      <div className="text-xs text-gray-400">
                        17 Feb, 2022 at 4:30 PM
                      </div>
                    </div>
                    <div>
                      <img
                        src="/api/placeholder/28/28"
                        alt="User"
                        className="w-7 h-7 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-600 p-2 rounded">
                      <Activity size={20} />
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm font-medium">
                        Ultimate body workout
                      </div>
                      <div className="text-xs text-gray-400">
                        17 Feb, 2022 at 3:30 PM
                      </div>
                    </div>
                    <div>
                      <img
                        src="/api/placeholder/28/28"
                        alt="User"
                        className="w-7 h-7 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Heart Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Heart rate</h2>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>Weekly</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <div>90b</div>
                    <div>70beats/m</div>
                  </div>
                  <div className="h-32 relative">
                    <div className="absolute inset-0 flex items-center">
                      <svg viewBox="0 0 200 50" className="w-full">
                        <path
                          d="M0,25 Q25,10 50,25 T100,25 T150,25 T200,25"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="absolute right-1/3 top-1/3 w-6 h-6 bg-yellow-300 rounded-full border-2 border-gray-800"></div>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <div>40b</div>
                    <div>0b</div>
                  </div>
                  <div className="flex justify-between mt-2 text-gray-400 text-xs">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Output and Food Section */}
            <div className="grid grid-cols-3 gap-6">
              {/* Output */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Output</h2>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>Monthly</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-lime-200 rounded-lg p-4 text-black">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm">Calory loss</div>
                          <div className="text-xl font-bold">123 gm</div>
                        </div>
                      </div>
                      <div className="bg-amber-400 px-2 py-1 rounded text-xs font-bold">
                        WOW
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-400 rounded-lg p-4 text-black">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm">Weight loss</div>
                          <div className="text-xl font-bold">1.23 kg</div>
                        </div>
                      </div>
                      <div className="bg-red-400 px-2 py-1 rounded text-xs font-bold">
                        Great
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Food */}
              <div className="col-span-2 space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Recommended food</h2>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>Monthly</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Day one</div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Veggis and Hummus</div>
                          <div className="text-xs text-gray-400">7 days</div>
                          <div className="text-xs text-gray-400">
                            only dinner time
                          </div>
                        </div>
                        <img
                          src="/api/placeholder/50/50"
                          alt="Food"
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-2">Day two</div>
                    <div className="bg-teal-400 rounded-lg p-3 text-black">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">A bowl of salad</div>
                          <div className="text-xs">12 days</div>
                          <div className="text-xs">only lunch time</div>
                        </div>
                        <img
                          src="/api/placeholder/50/50"
                          alt="Food"
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-2">Day three</div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Green variety foods</div>
                          <div className="text-xs text-gray-400">13 days</div>
                          <div className="text-xs text-gray-400">
                            for breakfast
                          </div>
                        </div>
                        <img
                          src="/api/placeholder/50/50"
                          alt="Food"
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-2">Day four</div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">A bowl of berries</div>
                          <div className="text-xs text-gray-400">9 days</div>
                          <div className="text-xs text-gray-400">
                            for breakfast
                          </div>
                        </div>
                        <img
                          src="/api/placeholder/50/50"
                          alt="Food"
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
