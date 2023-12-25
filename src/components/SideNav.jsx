import React, { Suspense } from "react";
import { Link, useLocation } from "react-router-dom";

import MenuItem from "./MenuItem";
import MenuItemFollow from "./MenuItemFollow";

const SideNav = ({ isMobile, closeSideNav }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div
        id="SideNav"
        className={`
                    fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto
                    ${pathname === "/" ? "lg:w-[310px]" : "lg:w-[220px]"}
                `}
      >
        <div className="lg:w-full w-[55px] mx-auto">
          <Link href="/" onClick={isMobile ? closeSideNav : undefined}>
            <MenuItem
              iconString="For You"
              colorString={pathname === "/" ? "#0000FF" : ""}
              sizeString="25"
            />
          </Link>
          <MenuItem
            iconString="Following"
            colorString="#000000"
            sizeString="25"
          />
          <MenuItem iconString="LIVE" colorString="#000000" sizeString="25" />

          <div className="border-b lg:ml-2 mt-2" />
          <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
            Suggested accounts
          </h3>

          <div className="lg:hidden block pt-3" />

          <div className="cursor-pointer">
            <Suspense fallback={<div>Loading...</div>}>
              <MenuItemFollow
                user={{
                  id: 1,
                  name: "John Doe",
                  image: "https://randomuser.me/api/portraits/men/1.jpg",
                }}
              />
            </Suspense>
          </div>

          <button
            id="seeAll"
            aria-describedby="seeAll"
            className="lg:block hidden text-[#0000FF] pt-1.5 pl-2 text-[13px]"
          >
            See all
          </button>

          <div>
            <div className="border-b lg:ml-2 mt-2" />
            <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
              Following accounts
            </h3>

            <div className="lg:hidden block pt-3" />

            <div className="cursor-pointer">
              <Suspense fallback={<div>Loading...</div>}>
                <MenuItemFollow
                  user={{
                    id: 3,
                    name: "Alice Johnson",
                    image: "https://randomuser.me/api/portraits/women/3.jpg",
                  }}
                />
              </Suspense>
            </div>

            <button
              id="seeMore"
              aria-describedby="seeMore"
              className="lg:block hidden text-[#0000FF] pt-1.5 pl-2 text-[13px]"
            >
              See more
            </button>
          </div>
          <div className="lg:block hidden border-b lg:ml-2 mt-2" />

          <div className="lg:block hidden text-[11px] text-gray-500">
            <p className="pt-4 px-2">
              About Newsroom TikTok Shop Contact Careers ByteDance
            </p>
            <p className="pt-4 px-2">
              TikTok for Good Advertise Developers Transparency TikTok Rewards
              TikTok Browse TikTok Embeds
            </p>
            <p className="pt-4 px-2">
              Help Safety Terms Privacy Creator Portal Community Guidelines
            </p>
            <p className="pt-4 px-2">© 2023 TikTok</p>
          </div>

          <div className="pb-14"></div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
