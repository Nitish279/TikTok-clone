import React from "react";

const UserAvatar = ({ profile }) => {
  return (
    <div className="cursor-pointer">
      <img
        loading="lazy"
        className="rounded-full max-h-[60px]"
        width="60"
        src={profile?.image}
        alt={profile.name}
      />
    </div>
  );
};

export default UserAvatar;
