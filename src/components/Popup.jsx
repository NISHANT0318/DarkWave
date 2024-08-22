import React, { useState } from 'react';

const Popup = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: toggleDarkModeOnPage,
        args: [!isDarkMode],
      });
    });
  };

  const toggleDarkModeOnPage = (enabled) => {
    document.body.style.backgroundColor = enabled ? '#2c2c2c' : '#ffffff';
    document.body.style.color = enabled ? '#e0e0e0' : '#000000';
  };

  return (
    <div>
      <h1>Night Mode Extension</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
      </button>
    </div>
  );
};

export default Popup;
