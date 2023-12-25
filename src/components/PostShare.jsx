import React from "react";
import { FaShare } from "react-icons/fa";

const PostShare = ({ shareCount }) => {
  return (
    <button id="sharePost" aria-describedby="sharePost" className="text-center">
      <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
        <FaShare size="25" />
      </div>
      <span className="text-base text-white font-semibold">{shareCount}</span>
    </button>
  );
};

export default PostShare;
