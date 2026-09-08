import React, { useState } from 'react';

export default function Sidebar() {
  // Track which menu item is active
  const [active, setActive] = useState('Dashboard');

  return (
    <aside className="w-1/5 bg-[#0E1A2B] min-h-[calc(100vh-4rem)] py-6 px-4">
      <nav>
        <ul className="space-y-2">
          {/* Dashboard */}
          <li
            onClick={() => setActive('Dashboard')}
            className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
              active === 'Dashboard'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            {/* You can replace the emoji with an icon if you want */}
            <span className="mr-3">📊</span>
            <span>Dashboard</span>
          </li>

          {/* Solar System */}
          <li
            onClick={() => setActive('Solar System')}
            className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
              active === 'Solar System'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <span className="mr-3">🚀</span>
            <span>Solar System</span>
          </li>

          {/* Planets */}
          <li
            onClick={() => setActive('Planets')}
            className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
              active === 'Planets'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <span className="mr-3">🔖</span>
            <span>Planets</span>
          </li>

          {/* Stars */}
          <li
            onClick={() => setActive('Stars')}
            className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
              active === 'Stars'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <span className="mr-3">✅</span>
            <span>Stars</span>
          </li>

          {/* Galaxies */}
          <li
            onClick={() => setActive('Galaxies')}
            className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
              active === 'Galaxies'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <span className="mr-3">◉</span>
            <span>Galaxies</span>
          </li>

          {/* Fake Detector */}
          <li
            onClick={() => setActive('Fake Detector')}
            className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
              active === 'Fake Detector'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <span className="mr-3">🛡️</span>
            <span>Fake Detector</span>
          </li>

          {/* Notifications */}
          <li
            onClick={() => setActive('Notifications')}
            className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
              active === 'Notifications'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <span className="mr-3">🔔</span>
            <span>Notifications</span>
          </li>

          {/* Profile */}
          <li
            onClick={() => setActive('Profile')}
            className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
              active === 'Profile'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <span className="mr-3">👤</span>
            <span>Profile</span>
          </li>

          {/* Logout */}
          <li
            onClick={() => setActive('Logout')}
            className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
              active === 'Logout'
                ? 'bg-[#6142BF] text-white'
                : 'text-gray-300 hover:bg-[#1D2949]'
            }`}
          >
            <span className="mr-3">↪️</span>
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
