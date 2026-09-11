import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Sidebar() {
  // Track which menu item is active
  const [active, setActive] = useState('Dashboard');

  return (
    <aside className="w-1/5 bg-[#0E1A2B] min-h-[calc(100vh-4rem)] py-6 px-4">
      <nav>
        <ul className="space-y-2">

          {/* Explore */}
          <li
            onClick={() => setActive('Explore')}
            className={`flex items-center px-4 py-4 rounded-lg cursor-pointer ${
              active === 'Explore'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <Link to="/" className="flex items-center w-full">
              <span className="mr-3 text-xl">🔭</span>
              <span className="text-lg">Explore</span>
            </Link>
          </li>

          {/* Solar System */}
          <li
            onClick={() => setActive('Solar System')}
            className={`flex items-center px-4 py-4 rounded-lg cursor-pointer ${
              active === 'Solar System'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <Link to="/solar-system" className="flex items-center w-full">
              <span className="mr-3 text-xl">☀️</span>
              <span className="text-lg">Solar System</span>
            </Link>
          </li>

          {/* Space Missions */}
          <li
            onClick={() => setActive('Space Missions')}
            className={`flex items-center px-4 py-4 rounded-lg cursor-pointer ${
              active === 'Space Missions'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <Link to="/space-missions" className="flex items-center w-full">
              <span className="mr-3 text-xl">🚀</span>
              <span className="text-lg">Space Missions</span>
            </Link>
          </li>

          {/* Discoveries */}
          <li
            onClick={() => setActive('Discoveries')}
            className={`flex items-center px-4 py-4 rounded-lg cursor-pointer ${
              active === 'Discoveries'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <Link to="/discoveries" className="flex items-center w-full">
              <span className="mr-3 text-xl">💡</span>
              <span className="text-lg">Discoveries</span>
            </Link>
          </li>

          {/* Achievements */}
          <li
            onClick={() => setActive('Achievements')}
            className={`flex items-center px-4 py-4 rounded-lg cursor-pointer ${
              active === 'Achievements'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <Link to="/achievements" className="flex items-center w-full">
              <span className="mr-3 text-xl">🏆</span>
              <span className="text-lg">Achievements</span>
            </Link>
          </li>

          {/* Theories */}
          <li
            onClick={() => setActive('Theories')}
            className={`flex items-center px-4 py-4 rounded-lg cursor-pointer ${
              active === 'Theories'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <Link to="/theories" className="flex items-center w-full">
              <span className="mr-3 text-xl">📖</span>
              <span className="text-lg">Theories</span>
            </Link>
          </li>

          {/* Scientists */}
          <li
            onClick={() => setActive('Scientists')}
            className={`flex items-center px-4 py-4 rounded-lg cursor-pointer ${
              active === 'Scientists'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <Link to="/scientists" className="flex items-center w-full">
              <span className="mr-3 text-xl">👨‍🔬</span>
              <span className="text-lg">Scientists</span>
            </Link>
          </li>

          {/* Quiz */}
          <li
            onClick={() => setActive('Quiz')}
            className={`flex items-center px-4 py-4 rounded-lg cursor-pointer ${
              active === 'Quiz'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <Link to="/quiz" className="flex items-center w-full">
              <span className="mr-3 text-xl">🧠</span>
              <span className="text-lg">Quiz</span>
            </Link>
          </li>

        </ul>
      </nav>
    </aside>
  );
}