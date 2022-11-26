import React from "react";
import { useNavigate } from "react-router-dom";
import "./../index.css";

interface ProfileDetails {
  name: string;
  profilePicture: string;
}

const Profile = (props: ProfileDetails) => {

  const login = () => {

  }
  const navigate = useNavigate();
  const pfp = "/assets/" + props.profilePicture + ".jpg"
  if (props.name === "Create New User") {
    return (
      <div onClick={() => navigate("/create-profile")} className="w-28 h-32 mx-2">
        <div className="bg-white w-full h-28 rounded-full overflow-hidden">
          <img src={pfp} alt="Icon" />
        </div>
        <p className="text-center w-full text-white">{props.name}</p>
      </div>
    );
  }
  else {
    return (
      <div className="w-28 h-32 mx-2">
        <div className="bg-white w-full h-28 rounded-full overflow-hidden">
          <img src={pfp} alt="Icon" />
        </div>
        <p className="text-center w-full text-white">{props.name}</p>
      </div>
    );
  }
};

export default Profile;
