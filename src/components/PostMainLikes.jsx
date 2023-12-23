import React from "react";
import PostLikes from "./PostLikes";
import PostComments from "./PostComments";
import PostShare from "./PostShare";

const PostMainLikes = ({ post }) => {
  return (
    <div id={`PostMainLikes-${post?.id}`} className="mr-[75px]">
      <div className="absolute bottom-0 pl-2">
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
