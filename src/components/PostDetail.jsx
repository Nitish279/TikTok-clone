import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { ImMusic } from "react-icons/im";
import FollowButton from "./FollowButton";

const PostDetail = ({ post }) => {
  return (
    <>
      <div className="flex items-center justify-between pb-0.5">
        <a
          href={`/profile/${post.profile.user_id}`}
          className="font-bold hover:underline cursor-pointer"
        >
          {post.profile.name}
        </a>
        <FollowButton />
      </div>
      <p className="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">
        {post.text}
      </p>
      <p className="text-[14px] text-gray-500 pb-0.5">
        #fun #cool #SuperAwesome
      </p>
      <p className="text-[14px] pb-0.5 flex items-center font-semibold">
        <ImMusic size="17" />
        <span className="px-1">{post.music}</span>
        <AiFillHeart size="20" />
      </p>
    </>
  );
};

export default PostDetail;
