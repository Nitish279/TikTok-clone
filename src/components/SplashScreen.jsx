import React from "react";
import logo from "../images/tiktok-logo-small.webp";

const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <img src={logo} alt="TikTok Logo" className="w-24 h-24 mb-4 mx-auto" />
        <h1 className="text-2xl font-bold text-gray-800">TikTok</h1>
        <p className="text-sm text-gray-600">Short Video App</p>
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
