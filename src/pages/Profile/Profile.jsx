import React from "react";
import { PostSide } from "../../components/PostSide/PostSide";
import { ProfileCard } from "../../components/profileCard/ProfileCard";
import { ProfileLeft } from "../../components/ProfileLeft/ProfileLeft";
import "./profile.css";
export const Profile = () => {
  
  return (
      <div className="profile">
        <ProfileLeft />
        <div className="profile-center">
          <ProfileCard />
          <PostSide />
        </div>
      </div>
    )
};
