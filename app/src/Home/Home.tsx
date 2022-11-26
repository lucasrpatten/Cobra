import React from "react";
import "./../index.css";
import { useNavigate, useLocation } from "react-router-dom";
import SideBar from "../Global/SideBar";

const Home = (props: any) => {
  const navigate = useNavigate();
  const handleIncoming = () => {
    let l = useLocation;
  };
  const ths = () => {
    navigate("/");
  };
  return (
    <>
      <SideBar />
      <button onClick={ths}>afdsf</button>
    </>
  );
};
export default Home;
