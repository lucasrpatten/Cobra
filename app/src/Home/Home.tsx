import React, { useState } from "react";
import LeftSide from "./LeftHome";
import RightHome from "./RightPanel/RightHome";

const Home: React.FC = () => {
  const [rightSide, setRightSide] = useState(<RightHome />);

  const handleLeftData = (data: any) => {
    setRightSide(data);
  };

  return (
    <>
      <LeftSide updateRightSide={handleLeftData} />
      <div className="w-2/3 relative float-right min-h-screen bg-green-300">
        {rightSide}
      </div>
    </>
  );
};
export default Home;
