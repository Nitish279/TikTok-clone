import React from "react";

import BrandLogo from "./BrandLogo";
import SearchBar from "./Search";
import TopNavButtons from "./TopNavButtons";

const TopNav = () => {
  return (
    <>
      <div
        id="TopNav"
        className="fixed bg-white z-30 flex items-center w-full border-b h-[60px]"
      >
        <div
          className={`flex items-center justify-between gap-6 w-full px-4 mx-auto max-w-[1150px]`}
        >
          <BrandLogo />
          <SearchBar />
          <div className="hidden md:block">
            <TopNavButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(TopNav);
