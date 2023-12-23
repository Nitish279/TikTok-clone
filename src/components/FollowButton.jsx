import React from "react";

const FollowButton = () => {
  return (
    <button
      id="followUser"
      aria-describedby="followUser"
      className="border text-[15px] px-[21px] py-0.5 border-[#0000FF] text-[#0000FF] hover:bg-[#ffeef2] font-semibold rounded-md"
    >
      Follow
    </button>
  );
};

export default FollowButton;
