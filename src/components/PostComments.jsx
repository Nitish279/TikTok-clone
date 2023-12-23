import React from "react";
import { FaCommentDots } from "react-icons/fa";

const PostComments = ({ commentCount }) => {
  return (
    <button
      id="commentOnPost"
      aria-describedby="commentOnPost"
      className="pb-4 text-center"
    >
      <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
        <FaCommentDots size="25" />
      </div>
      <span className="text-xs text-gray-800 font-semibold">
        {commentCount}
      </span>
    </button>
  );
};

export default PostComments;
