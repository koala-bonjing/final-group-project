import React from "react";
import BG from "../assets/abstract-blur-restaurant-coffee-shop-cafe.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      {/* Content container */}
      <div className="relative z-10 flex items-center justify-between w-4/5 max-w-6xl text-white gap-12">
        {/* Left section */}
        <div className="flex flex-col space-y-6 w-1/2">
          <h1
            className="text-4xl font-bold drop-shadow-lg text-poppin pt-"
            style={{ fontFamily: "Poppins" }}
          >
            Welcome Conference Expense Planner
          </h1>

          <h2
            className="text-lg font-semibold drop-shadow-md"
            style={{ fontFamily: "Poppins" }}
          >
            Plan your next major event with us!
          </h2>

          <Button
            variant="ghost"
            onClick={() => navigate("/venue")}
            className="bg-yellow-500 w-fit  p-8 text-xl"
            style={{ fontFamily: "Poppins" }}
          >
            Get started!
          </Button>
        </div>

        {/* Right section */}
        <div className="w-1/2 space-y-6 text-base leading-relaxed text-gray-200 drop-shadow-md">
          <p
            className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20"
            style={{ fontFamily: "Poppins" }}
          >
            Planning a major event can be exciting, but managing the finances
            can be overwhelming. That’s where the{" "}
            <span className="font-semibold text-yellow-400">
              Conference Expense Planner
            </span>{" "}
            comes in. Our tool is specifically designed to streamline the
            budgeting process for conferences, corporate retreats, and
            large-scale meetings. We help you move beyond cumbersome
            spreadsheets by providing an intuitive platform for tracking every
            potential cost — from venue rental and catering to speaker fees and
            marketing materials — ensuring you have a clear, real-time overview
            of your financial commitments.
          </p>

          <p
            className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20"
            style={{ fontFamily: "Poppins" }}
          >
            Plan your next major event with us! By leveraging our dedicated
            platform, you can shift your focus from complex financial tracking
            back to crafting a memorable and successful experience for your
            attendees. Take the guesswork out of event budgeting and gain the
            confidence that comes from using a specialized tool built for event
            professionals. Ready to simplify your planning process?
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
