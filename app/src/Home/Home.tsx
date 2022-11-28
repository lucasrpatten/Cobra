import React from "react";
import "./../index.css";
import { useNavigate } from "react-router-dom";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const Home = (props: any) => {
  const navigate = useNavigate();
  let user = localStorage.getItem("user");
  let pfp = localStorage.getItem("pfp");

  return (
    <>
      <LeftSide />
      <RightSide />
    </>
  );
};
export default Home;
