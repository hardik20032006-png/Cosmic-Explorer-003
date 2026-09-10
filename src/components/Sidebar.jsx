import React, { useState } from 'react';

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
            
            <span className="mr-3 text-xl">🔭</span>
            <span className="text-lg">Explore</span>
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
            <span className="mr-3 text-xl">☀️</span>
            <span className="text-lg">Solar System</span>
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
            <span className="mr-3 text-xl">🚀</span>
            <span className="text-lg">Space Missions</span>
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
            <span className="mr-3 text-xl">💡</span>
            <span className="text-lg">Discoveries</span>
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
            <span className="mr-3 text-xl">🏆</span>
            <span className="text-lg">Achievements</span>
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
            <span className="mr-3 text-xl">📖</span>
            <span className="text-lg">Theories</span>
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
            <span className="mr-3 text-xl">👨‍🔬</span>
            <span className="text-lg">Scientists</span>
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
            <span className="mr-3 text-xl">🧠</span>
            <span className="text-lg">Quiz</span>
          </li>

        </ul>
      </nav>
    </aside>
  );
}
