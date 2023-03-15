import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../index.css";

const { ipcRenderer } = window.require("electron");

const CreateProfile = () => {
  const [uname, setUname] = useState("");
  const [pfp, setPfp] = useState("snake");

  const navigate = useNavigate();
  const createProfile = async function (event: any) {
    event.preventDefault();
    await ipcRenderer.invoke("create-profile", uname, pfp + "profile");
  };

  const createThenNav = (event: any) => {
    createProfile(event);
    navigate("/");
  };

  return (
    <>
      <div>
        <div className="flex justify-center">
        {["snake", "duck"].map((name) => (
          <img
            className={`relative inline-block bg-white w-28 h-28 rounded-full overflow-hidden hover:cursor-pointer ${
              pfp === name ? "border-solid border-4 border-green-500" : ""
            }`}
            src={`/assets/${name}profile.svg`}
            alt={`${name} profile`}
            id={name}
            onClick={() => setPfp(name)}
            key={name}
          />
        ))}
        </div>

        <form onSubmit={createThenNav}>
          <input
            id="username_input"
            placeholder="username"
            type={"text"}
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            required
          />
          <Link to="/">Cancel Creation</Link>
          <input id="create_user" type={"submit"} value="Create User" />
        </form>
      </div>
    </>
  );
};

export default CreateProfile;
