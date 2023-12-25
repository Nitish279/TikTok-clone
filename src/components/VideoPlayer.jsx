import React, { useEffect, useRef, useState } from "react";
import VideoControls from "./VideoControls";

const VideoPlayer = ({ post }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        try {
          if (entry.isIntersecting) {
            if (video.paused) {
              video.play().catch((error) => {
                console.error("Error playing video:", error);
              });
              setIsPlaying(true);
            }
          } else {
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          }
        } catch (error) {
          console.error("Error handling video visibility:", error);
        }
      },
      { threshold: [0.6] }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
      observer.disconnect();
    };
  }, [post.id]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      try {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Error playing video:", error);
          });
        }
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing video:", error);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !isMuted;
    setIsMuted((prevMuted) => !prevMuted);
  };

  return (
    <div className="video-player-container relative group">
      <video
        ref={videoRef}
        id={`video-${post.id}`}
        loop
        muted={isMuted}
        loading="lazy"
        playsInline
        className="rounded-xl object-cover mx-auto h-full w-full"
      >
        <source src={post?.video_url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <VideoControls
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        isMuted={isMuted}
        toggleMute={toggleMute}
      />
    </div>
  );
};

export default VideoPlayer;
