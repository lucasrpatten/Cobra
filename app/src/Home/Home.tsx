import React, { useState } from "react";
import LeftSide from "./LeftHome";
import RightHome from "./RightPanel/RightHome";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [rightSide, setRightSide] = useState(<RightHome />);

  const handleLeftData = (data: any) => {
    setRightSide(data);
  };

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
    <div className="bg-gray">
      <LeftSide updateRightSide={handleLeftData} />
      <div className="bg-dark-gray w-2/3 relative float-right min-h-screen bg-green-300">
        {rightSide}
      </div>
    </div>
    </motion.div>
  );
};
export default Home;
