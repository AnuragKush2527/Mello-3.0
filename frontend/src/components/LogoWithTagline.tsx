import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UsersRound } from 'lucide-react';

const LogoWithTagline: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/" className="flex items-center">

        <UsersRound
          className={`h-8 w-8 text-purple-600 transition-all duration-500 ease-in-out`}
        />


        <span className="ml-2 text-2xl font-bold text-purple-600 transition-all duration-100 ease-in-out flex items-center ">
          {!isHovered ? (
            "mellow"
          ) : (
            <span className="inline-block animate-typewriter ">
              Connect Beyond Screens, Live the Moment
            </span>
          )}
        </span>
      </Link>


      <style>
        {`
          .animate-typewriter {
            overflow: hidden;
            white-space: nowrap;
            display: inline-block;
            border-right: 2px solid #6b46c1; 
            animation: ${isHovered ? 'typing 1s steps(40, end), blink 0.5s step-end infinite alternate' : 'reverseTyping 1s steps(40, end), blink 0.5s step-end infinite alternate'};
          }

          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }

          @keyframes reverseTyping {
            from { width: 100%; }
            to { width: 0; }
          }

          @keyframes blink {
            from { border-color: transparent; }
            to { border-color: #6b46c1; }
          }
        `}
      </style>
    </div>
  );
};

export default LogoWithTagline;