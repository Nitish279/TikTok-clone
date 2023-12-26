import React from "react";
import UserAvatar from "./UserAvatar";
import PostDetail from "./PostDetail";

import VideoPlayer from "./VideoPlayer";
import PostMainLikes from "./PostMainLikes";

const PostMain = ({ post }) => {
  return (
    <div id={`PostMain-${post.id}`} className="flex border-b py-6 group">
      <UserAvatar profile={post.profile} />
      <div className="pl-3 w-full px-4">
        <PostDetail post={post} />
        <br />
        <div className="relative min-h-[460px] max-h-[580px] max-w-[300px] flex items-center bg-black rounded-xl cursor-pointer group">
          <VideoPlayer post={post} />
          <div className="hidden sm:block">
            <PostMainLikes post={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PostMain);
