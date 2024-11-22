// RegisterButton.js (or RegisterButton.tsx for TypeScript)
import React, { useState } from 'react';

const RegisterButton = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleClick = () => {
    setIsRegistered(true);
  };

  return (
    <button
      className={`w-full py-2 rounded-full transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${isRegistered ? 'bg-green-600 text-white' : 'bg-purple-600 text-white'
        } hover:${isRegistered ? 'bg-green-700' : 'bg-primary-700'} hover:scale-105`}
      onClick={handleClick}
    >
      {isRegistered ? (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Registered
        </span>
      ) : (
        'Register Now'
      )}
    </button>
  );
};

export default RegisterButton;