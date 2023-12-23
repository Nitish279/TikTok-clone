import React, { useRef, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";

const PostLikes = ({ likes, userLiked, hasClickedLike, likeOrUnlike }) => {
  const likeButtonRef = useRef();

  useEffect(() => {
    if (hasClickedLike) {
      likeButtonRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [hasClickedLike]);

  const buttonId = "likePostButton";
  return (
    <div className="pb-4 text-center">
      <button
        id={Math.floor(Math.random() * 1000000)}
        aria-describedby={`description for ${Math.floor(
          Math.random() * 1000000
        )}`}
        disabled={hasClickedLike}
        onClick={likeOrUnlike}
        className="rounded-full bg-gray-200 p-2 cursor-pointer"
        ref={likeButtonRef}
      >
        {!hasClickedLike ? (
          <AiFillHeart color={userLiked ? "#ff2626" : ""} size="25" />
        ) : (
          <BiLoaderCircle className="animate-spin" size="25" />
        )}
      </button>
      <span
        id={`${buttonId}-description`}
        className="text-xs text-gray-800 font-semibold"
      >
        {likes?.length}
      </span>
    </div>
  );
};

export default PostLikes;
