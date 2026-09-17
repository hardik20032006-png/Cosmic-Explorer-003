import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-1/5 bg-[#0E1A2B] min-h-[calc(100vh-4rem)] py-4 px-4">
      <nav>
        <ul className="space-y-1">

          {/* Explore */}
          <li>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-[#6142BF] text-white"
                    : "text-gray-300 hover:bg-[#1D2949]"
                }`
              }
            >
              <span className="mr-3 text-lg">🔭</span>
              <span className="text-lg">Explore</span>
            </NavLink>
          </li>

          {/* Solar System */}
          <li>
            <NavLink
              to="/solar-system"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-[#6142BF] text-white"
                    : "text-gray-300 hover:bg-[#1D2949]"
                }`
              }
            >
              <span className="mr-3 text-lg">☀️</span>
              <span className="text-lg">Solar System</span>
            </NavLink>
          </li>

          {/* Space Missions */}
          <li>
            <NavLink
              to="/space-missions"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-[#6142BF] text-white"
                    : "text-gray-300 hover:bg-[#1D2949]"
                }`
              }
            >
              <span className="mr-3 text-lg">🚀</span>
              <span className="text-lg">Space Missions</span>
            </NavLink>
          </li>

          {/* Discoveries */}
          <li>
            <NavLink
              to="/discoveries"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-[#6142BF] text-white"
                    : "text-gray-300 hover:bg-[#1D2949]"
                }`
              }
            >
              <span className="mr-3 text-lg">💡</span>
              <span className="text-lg">Discoveries</span>
            </NavLink>
          </li>

          {/* Achievements */}
          <li>
            <NavLink
              to="/achievements"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-[#6142BF] text-white"
                    : "text-gray-300 hover:bg-[#1D2949]"
                }`
              }
            >
              <span className="mr-3 text-lg">🏆</span>
              <span className="text-lg">Achievements</span>
            </NavLink>
          </li>

          {/* Theories */}
          <li>
            <NavLink
              to="/theories"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-[#6142BF] text-white"
                    : "text-gray-300 hover:bg-[#1D2949]"
                }`
              }
            >
              <span className="mr-3 text-lg">📖</span>
              <span className="text-lg">Theories</span>
            </NavLink>
          </li>

          {/* Scientists */}
          <li>
            <NavLink
              to="/scientists"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-[#6142BF] text-white"
                    : "text-gray-300 hover:bg-[#1D2949]"
                }`
              }
            >
              <span className="mr-3 text-lg">👨‍🔬</span>
              <span className="text-lg">Scientists</span>
            </NavLink>
          </li>

          {/* Quiz */}
          <li>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-[#6142BF] text-white"
                    : "text-gray-300 hover:bg-[#1D2949]"
                }`
              }
            >
              <span className="mr-3 text-lg">🧠</span>
              <span className="text-lg">Quiz</span>
            </NavLink>
          </li>

          {/* Facts */}
          <li>
            <NavLink
              to="/Facts"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-[#6142BF] text-white"
                    : "text-gray-300 hover:bg-[#1D2949]"
                }`
              }
            >
              <span className="mr-3 text-lg">☝️</span>
              <span className="text-lg">Facts</span>
            </NavLink>
          </li>

          {/* Galary */}
          <li>
            <NavLink
              to="/Galary"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-[#6142BF] text-white"
                    : "text-gray-300 hover:bg-[#1D2949]"
                }`
              }
            >
              <span className="mr-3 text-lg">☝️</span>
              <span className="text-lg">Galary & Wallpaper</span>
            </NavLink>
          </li>

        </ul>
      </nav>
    </aside>
  );
}