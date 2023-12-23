// MainLayout.js
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

import TopNav from "./TopNav";
import SideNav from "./SideNav";
import PostMain from "./PostMain";
import OfflineNotifier from "./OfflineNotifier";
import InstallPrompt from "./InstallPrompt"; // Import the InstallPrompt component
import posts from "../data/posts.json";

const MainLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const memoizedPosts = useMemo(() => posts, []); // Memoize allPosts

  return (
    <>
      <OfflineNotifier />
      <TopNav />
      <InstallPrompt /> {/* Add the InstallPrompt component */}
      <div
        className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${
          pathname === "/" ? "max-w-[1140px]" : ""
        }`}
      >
        <SideNav />
        <div className="mt-[80px] w-[calc(100%-90px)] max-w-[690px] ml-auto">
          {memoizedPosts.map((post) => (
            <PostMain post={post} key={post.id} /> // Use a unique identifier as the key
          ))}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
