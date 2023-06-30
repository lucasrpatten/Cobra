import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

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
      tmpMsgs.push({ "content": msg })
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen overflow-y-scroll relative flex flex-col"
    >
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`p-2 m-2 max-w-[90%] rounded-lg ${index % 2 === 1 ? 'bg-dark-teal text-left text-white' : 'bg-gray text-white text-right'
                }`}
            >
              <ReactMarkdown
                components={{
                  code: ({ node, inline, className, children, ...props }) => (
                    <code className={`${className || ""} ${inline ? "" : "bg-[#1e7871]"}`}
                      {...props}
                    >
                      {children}
                    </code>
                  )
                }}
              >{message}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="flex w-full">
          <input
            type="text"
            value={currentMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={isLoading} // Disable input when loading
            className="flex-1 p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 relative"
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading} // Disable send button when loading
            className="px-4 py-2 border-teal text-white rounded-r-lg relative"
          >
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );

};

export default AIChat;
