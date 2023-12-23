import React, { useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";

const TopNavButtons = () => {
  const navigate = useNavigate();
  const goTo = useCallback(() => navigate("/upload"), [navigate]);
  const handleLogin = useCallback(() => navigate("/login"), [navigate]);
  return (
    <div>
      <div className="flex items-center gap-3 ">
        <GenericButton
          onClick={goTo}
          icon={AiOutlinePlus}
          size="22"
          iconColor="#000000"
          ariaLabel="Upload"
          className={
            "flex items-center border rounded-md px-3 py-[6px] hover:bg-gray-100 pl-1.5"
          }
        >
          <span className="px-2 font-medium text-[15px]">Upload</span>
        </GenericButton>

        <div className="flex items-center">
          <GenericButton
            onClick={handleLogin}
            ariaLabel="Log in"
            className={
              "flex items-center bg-[#0000FF] text-white border rounded-md px-3 py-[6px]"
            }
          >
            <span className="whitespace-nowrap mx-4 font-medium text-[15px]">
              Log in
            </span>
          </GenericButton>
        </div>
      </div>
    </div>
  );
};

export default TopNavButtons;
