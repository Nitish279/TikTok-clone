import React from "react";
import PostLikes from "./PostLikes";
import PostComments from "./PostComments";
import PostShare from "./PostShare";

const PostMainLikes = ({ post }) => {
  return (
    <div
      id={`PostMainLikes-${post?.id}`}
      className="absolute bottom-[120px] right-[4px] p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <div className="flex flex-col items-center justify-center">
        <PostLikes
          likes={post.likes}
          userLiked={post.userLiked}
          hasClickedLike={post.hasClickedLike}
          likeOrUnlike={() => console.log("likeOrUnlike clicked")}
        />
        <PostComments commentCount={post.comments.length} />
        <PostShare shareCount={post.shareCount} />
      </div>
    </div>
  );
};

export default React.memo(PostMainLikes);
