import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ post }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        if (video.paused) {
          video.play().catch((error) => {
            console.error("Error playing video:", error);
          });
        }
      } else {
        if (!video.paused) {
          video.pause();
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.6],
    });

    observer.observe(video);

    return () => {
      observer.unobserve(video);
      observer.disconnect();
    };
  }, [post.id]);

  return (
    <video
      ref={videoRef}
      id={`video-${post.id}`}
      loop
      controls
      muted
      loading="lazy"
      className="rounded-xl object-cover mx-auto h-full"
    >
      <source src={`./videos/${post?.video_url}.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
