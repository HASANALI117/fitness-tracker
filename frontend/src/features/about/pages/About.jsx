import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";

export default function About() {
  return (
    <div className="min-h-screen text-white bg-black">
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-20">
          <Header title="Our Story" subtitle="Why we created this platform" />

          <motion.div
            className="p-6 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="p-6 rounded-lg bg-gray-900/80">
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="mb-4">
                This platform was created in response to the alarming rise in
                global obesity rates. We recognized the urgent need for
                accessible, personalized tools that can help individuals take
                control of their health and fitness journey.
              </p>
              <p className="mb-4">
                Aligning with Sustainable Development Goal 3 (Good Health and
                Well-being), we aim to provide resources that promote healthier
                lifestyles and combat the growing health crisis of obesity
                worldwide.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold">What We Offer</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-4 rounded-lg bg-gray-800/80">
                  <h3 className="mb-2 text-lg font-semibold text-lime-400">
                    Personalized Workout Plans
                  </h3>
                  <p>
                    AI-generated workout routines tailored to your fitness
                    level, goals, and available equipment. Progressive plans
                    that evolve as you grow stronger.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-800/80">
                  <h3 className="mb-2 text-lg font-semibold text-lime-400">
                    Nutrition Guidance
                  </h3>
                  <p>
                    Custom meal plans and nutritional advice based on your
                    specific goals, dietary restrictions, and preferences to
                    fuel your journey.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-800/80">
                  <h3 className="mb-2 text-lg font-semibold text-lime-400">
                    Progress Tracking
                  </h3>
                  <p>
                    Comprehensive tracking tools to monitor your workouts,
                    nutrition, and overall progress toward your fitness goals.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-800/80">
                  <h3 className="mb-2 text-lg font-semibold text-lime-400">
                    Health Education
                  </h3>
                  <p>
                    Resources and information to help you understand the
                    importance of maintaining a healthy lifestyle and making
                    informed choices.
                  </p>
                </div>
              </div>

              <h2 className="mt-8 mb-4 text-2xl font-bold">Our Impact</h2>
              <p className="mb-4">
                We hope that through our platform, users will find the
                motivation and tools they need to improve their health and
                fitness. By making these resources widely accessible, we aim to
                contribute to reducing obesity rates and promoting overall
                well-being.
              </p>
              <p>
                Our ultimate goal is to create a community of health-conscious
                individuals who support each other in their fitness journeys and
                collectively work toward a healthier society.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
