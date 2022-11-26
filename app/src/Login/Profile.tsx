import React from "react";
import { useNavigate } from "react-router-dom";
import "./../index.css";

interface ProfileDetails {
  name: string;
  profilePicture: string;
}

const Profile = (props: ProfileDetails) => {
  function setCookie(name: string, value: any, days: number) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  function getCookie(name: string) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  function eraseCookie(name: string) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  const login = () => {
    setCookie("loggedIn", true, 1); // stay logged in for a day
    localStorage.setItem("user", props.name);
    localStorage.setItem("pfp", props.profilePicture);
    navigate("/home");
  };
  const navigate = useNavigate();
  const pfp = "/assets/" + props.profilePicture + ".svg";
  if (props.name === "Create New User") {
    return (
      <div
        onClick={() => navigate("/create-profile")}
        className="w-28 h-32 mx-2"
      >
        <div className="bg-white w-full h-28 rounded-full overflow-hidden">
          <img src={pfp} alt="Icon" />
        </div>
        <p className="text-center w-full text-white">{props.name}</p>
      </div>
    );
  } else {
    return (
      <div onClick={() => login()} className="w-28 h-32 mx-2">
        <div className="bg-white w-full h-28 rounded-full overflow-hidden">
          <img src={pfp} alt="Icon" />
        </div>
        <p className="text-center w-full text-white">{props.name}</p>
      </div>
    );
  }
};

export default Profile;
