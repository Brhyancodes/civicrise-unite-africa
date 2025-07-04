
import { useState } from 'react';

export const useAIChat = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  const toggleChat = () => {
    setIsMinimized(!isMinimized);
    if (!isChatVisible) {
      setIsChatVisible(true);
    }
  };

  const showChat = () => {
    setIsChatVisible(true);
    setIsMinimized(false);
  };

  const hideChat = () => {
    setIsChatVisible(false);
    setIsMinimized(true);
  };

  return {
    isChatVisible,
    isMinimized,
    toggleChat,
    showChat,
    hideChat
  };
};
