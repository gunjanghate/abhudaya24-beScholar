"use client";

import React, { useState } from 'react';
import { IoChatbubblesOutline } from "react-icons/io5";

const ChatbotSidebar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleChatbot = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={`w-72 h-1/2 bg-white border-l border-gray-200 shadow-lg p-2 z-50`}>
            <button 
                onClick={toggleChatbot} 
                className="px-4 py-2 bg-gray-800 text-white rounded cursor-pointer">
                <IoChatbubblesOutline />
            </button>
            {isVisible && (
                <div className="w-full h-[450px] border border-gray-200 rounded-md overflow-hidden shadow-lg mt-2">
                    <iframe
                        src="https://www.chatbase.co/chatbot-iframe/dH8ZwNVEDj384kBWnO7V2"
                        className="w-full h-full"
                        frameBorder="0"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default ChatbotSidebar;
