import { useState, useEffect } from "react";
import Profile from "./Profile";
import "./../index.css";
import logo from "./snakeLogo.svg"

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
    <div className="min-w-full min-h-screen bg-dark-gray items-center justify-center flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap5 items-center justify-center">
        <img className="hidden sm:block" src={logo} />
        <h1 className="mt-0 uppercase text-white text-4xl font-bold text-center">Cobra</h1>
      </div>
      <div className="flex items-center justify-center overflow-auto overflow-x-auto h-96 sm:h-64 w-5/6">
        <div className="flex flex-col w-40 sm:w-full sm:flex-row justify-center items-center gap-10 mt-64 sm:ml-64 sm:mt-0">
          {profiles}
          <Profile name="Create New User" profilePicture={"snake"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
