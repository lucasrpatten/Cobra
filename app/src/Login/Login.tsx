import { useState, useEffect } from "react";
import Profile from "./Profile";
import "./../index.css";

const { ipcRenderer } = window.require("electron");

const Login = () => {
  const [profiles, setProfiles] = useState<any>([]);
  async function getProfiles() {
    setProfiles([]);
    const res = await ipcRenderer.invoke("get-profiles");
    for (let i = 0; i < res.length; i++) {
      console.log(i);
      setProfiles((profiles: any) => [
        ...profiles,
        <Profile key={i} name={res[i][0]} profilePicture={res[i][1]} />,
      ]);
    }
  }

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <div className="max-w-full max-h-full w-full h-full bg-black absolute">
      <div className="flex flex-wrap h-full w-full justify-center items-center absolute">
        {profiles}
        <Profile name="Create New User" profilePicture="snake" />
      </div>
    </div>
  );
};

export default Login;
