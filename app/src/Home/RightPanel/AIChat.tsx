import React, { useState } from "react";
import { motion } from "framer-motion";

const { ipcRenderer } = window.require("electron");

interface Message {
  content: string;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMessage = async (msgs: string[]) => {
    setIsLoading(true);
    let tmpMsgs = []
    for (const msg of msgs) {
      tmpMsgs.push({"content": msg})
    }
    try {
      const response = await ipcRenderer.invoke("send-message", { messages: tmpMsgs });
      setMessages(prevMessages => [...prevMessages, response]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  }

  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      const newMessages = [...messages, currentMessage];
      setMessages(newMessages);
      setCurrentMessage('');
      getMessage(newMessages);
    }
  };


  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="h-full max-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`p-2 m-1 max-w-md rounded-lg ${index % 2 === 1 ? 'bg-gray-200' : 'bg-blue-500 text-white'
                  }`}
              >
                {message}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 flex">
          <input
            type="text"
            value={currentMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={isLoading} // Disable input when loading
            className="flex-1 p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading} // Disable send button when loading
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
          >
            Send
          </button>
        </div>
      </motion.div >
    </div>
  );
};

export default AIChat;
