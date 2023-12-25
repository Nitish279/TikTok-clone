import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import TopNav from "./TopNav";
import SideNav from "./SideNav";
import PostMain from "./PostMain";
import OfflineNotifier from "./OfflineNotifier";
import InstallPrompt from "./InstallPrompt";
import { posts } from "../data/posts";

const MainLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const memoizedPosts = useMemo(() => posts, []);

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <>
      <OfflineNotifier />
      <TopNav />
      <InstallPrompt />
      <div
        className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${
          pathname === "/" ? "max-w-[1140px]" : ""
        }`}
      >
        {isSideNavOpen && (
          <div className="lg:hidden fixed top-0 left-0 h-full w-full bg-white z-30">
            <SideNav isMobile closeSideNav={closeSideNav} />
          </div>
        )}

        {/* SideNav for desktop */}
        <div className={`lg:flex ${isSideNavOpen ? "block" : "hidden"}`}>
          <SideNav />
        </div>

        <div className="mt-[80px] max-w-[690px] lg:w-[calc(100%-90px)] ml-auto lg:pl-0 lg:pr-0 sm:pl-0 sm:pr-2">
          {memoizedPosts.map((post) => (
            <PostMain post={post} key={post.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
