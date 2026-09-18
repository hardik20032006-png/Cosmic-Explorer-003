import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import spaceSound from "../assets/space-sound.mp3";

export default function Sidebar() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setVolume(0);
      audioRef.current.volume = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 1;
      audioRef.current.loop = true;
      audioRef.current.play();

      setVolume(100);
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;

      if (newVolume === 0) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else if (!isPlaying) {
        audioRef.current.loop = true;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <aside className="w-1/5 bg-[#0E1A2B] min-h-[calc(100vh-4rem)] py-4 px-4 flex flex-col">

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

          {/* Gallery */}
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

      {/* Space Sound */}
      <div className="mt-auto pb-2">

        <audio
          ref={audioRef}
          src={spaceSound}
        />

        {/* Sound Controls */}
<div className="mt-4 px-3">

  {/* Speaker + Volume Slider */}
  <div className="flex items-center gap-3">

    <button
      onClick={toggleSound}
      className="text-xl text-white hover:text-[#6142BF] transition"
    >
      {isPlaying ? "🔊" : "🔇"}
    </button>

    <input
      type="range"
      min="0"
      max="100"
      value={volume}
      onChange={handleVolumeChange}
      className="flex-1 cursor-pointer accent-[#6142BF]"
    />

  </div>

  {/* Volume Value */}
  <div className="flex justify-between mt-2">
    <span className="text-gray-300 text-sm">
      Volume
    </span>

    <span className="text-gray-300 text-sm">
      {volume}%
    </span>
  </div>

</div>
 </div>
        

    </aside>
  );
}