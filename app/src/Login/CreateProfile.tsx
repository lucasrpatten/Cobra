import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <div className="w-full h-screen bg-dark-gray flex gap-10 flex-col items-center justify-center">
        <div className="flex justify-center">
        {["snake", "duck"].map((name) => (
          <img
            className={`m-5 relative inline-block bg-white w-28 h-28 rounded-full overflow-hidden hover:cursor-pointer ${
              pfp === name ? "border-solid border-4 border-teal duration-300" : ""
            }`}
            src={`/assets/${name}profile.svg`}
            alt={`${name} profile`}
            id={name}
            onClick={() => setPfp(name)}
            key={name}
          />
        ))}
        </div>
          <div className="flex flex-col">
            <form className="flex flex-col items-center justify-center gap-5" onSubmit={createThenNav}>
              <input
                id="username_input"
                placeholder="username"
                type={"text"}
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                required
                className="px-5 py-2 rounded-xl bg-white border-4 border-teal text-dark-gray focus:border-red duration-300"
              />
              <input className="px-5 py-2 font-bold duration-300 border-4 rounded-xl hover:bg-dark-gray border-teal bg-teal hover:text-teal text-dark-gray" id="create_user" type={"submit"} value="Create User" />
              <Link className="px-5 py-2 font-bold duration-300 border-4 rounded-xl bg-dark-gray hover:border-red hover:bg-red text-red hover:text-dark-gray" to="/">Cancel Creation</Link>
            </form>
          </div>
      </div>
      </motion.div>
    </>
  );
};

export default CreateProfile;
