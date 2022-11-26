import React from "react";
import "./../index.css";
import { useNavigate, useLocation } from "react-router-dom";
import SideBar from "../Global/SideBar";
import RightSide from "./RightSide";
const Home = (props: any) => {
  const navigate = useNavigate();
  const handleIncoming = () => {
    let l = useLocation;
  };

  return (
    <>
      <SideBar position="relative float-left" maxWidth="x" />
      <RightSide />
    </>
  );
};
export default Home;
