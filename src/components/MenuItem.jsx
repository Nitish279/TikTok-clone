import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";

const MenuItem = ({ iconString, sizeString, colorString }) => {
  const icons = () => {
    switch (iconString) {
      case "For You":
        return <AiOutlineHome size={sizeString} color={colorString} />;
      case "Following":
        return <RiGroupLine size={sizeString} color={colorString} />;
      case "LIVE":
        return <BsCameraVideo size={sizeString} color={colorString} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md">
      <div className="flex items-center lg:mx-0 mx-auto">
        {icons()}

        <p
          className={`lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px] text-[${colorString}]`}
        >
          {iconString}
        </p>
      </div>
    </div>
  );
};

export default React.memo(MenuItem);
