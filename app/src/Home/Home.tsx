import React, {useState} from "react";
import {Link} from "react-router-dom";
import LeftSide from "./LeftSide";
import RightHome from "./RightPanel/RightHome";

const Home = ({update}: any) => {
  const [rightSide, setRightSide] = useState(<RightHome />);

  const handleLeftData = (data:any)=> {
    setRightSide(data);
  }

  return (
    <>
      <LeftSide updateRightSide={handleLeftData}/>
      {rightSide}
    </>
  );
};
export default Home;