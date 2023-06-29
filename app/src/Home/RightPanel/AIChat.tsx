import React, { MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

const { ipcRenderer } = window.require("electron");

const AIChat = () => {
  let messages = [{"content": "Whats up my man?"}];

  const getMessage = async function (event: MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    let response = await ipcRenderer.invoke("send-message", {messages: messages});
    console.log(response);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div onClick={getMessage}>Click me</div>
    </motion.div>
  );
};

export default AIChat;
