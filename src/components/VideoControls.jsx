import React from "react";
import { IoPause, IoPlay } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";

const VideoControls = ({ isPlaying, togglePlayPause, isMuted, toggleMute }) => {
  return (
    <div className="custom-controls absolute w-full flex items-center justify-between bottom-8 px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <button
        onClick={togglePlayPause}
        className="rounded-full bg-gray-200 p-2 cursor-pointer text-2xl"
      >
        {isPlaying ? <IoPause /> : <IoPlay />}
      </button>
      <button
        onClick={toggleMute}
        className="rounded-full bg-gray-200 p-2 cursor-pointer text-2xl"
      >
        {isMuted ? <IoVolumeMute /> : <GoUnmute />}
      </button>
    </div>
  );
};

export default VideoControls;
