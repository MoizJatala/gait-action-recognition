import React, { useState, useEffect } from 'react';

const Result = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    // Set a timeout to show the paragraph after 5 seconds (adjust as needed)
    const timeoutId = setTimeout(() => {
      setShowParagraph(true);
    }, 2000);
    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div>
    {!showParagraph && (
  <div className="flex items-center justify-center f-screen">
    <div className="relative">
      <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
      <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
    </div>
  </div>
)}
      {showParagraph && (
        <div className="mx-auto w-full max-w-[550px]">
        <p className="mt-4 text-center text-indigo-500 mt-2">Your additional paragraph content goes here.</p>
        </div>
      )}
    </div>
  );
};

export default Result;
