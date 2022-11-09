import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../index.css";

const { ipcRenderer } = window.require("electron");


const CreateProfile = () => {
  const [uname, setUname] = useState("");

  const navigate = useNavigate();
  const createProfile = async function (event: any) {
    event.preventDefault();
    await ipcRenderer.invoke('create-profile', uname);
  };
  const createThenNav = (event: any) => {
    createProfile(event)
    navigate('/login')
  }
  return (
    <>
      <form onSubmit={createThenNav}>
        <input
          id="username_input"
          placeholder="username"
          type={"text"}
          value={uname}
          onChange={(e) => setUname(e.target.value)}
          required
        />
        <input
          id="create_user"
          type={'submit'}
          value='Create User'
        />
      </form>
    </>
  );
};

export default CreateProfile;
