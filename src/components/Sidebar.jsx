
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import spaceSound from "../assets/space-sound.mp3";

const spaceSounds = [
  {
    name: "Curiosity of the Space",
    emoji: "🔭",
    url: "https://res.cloudinary.com/hxmlwdvg/video/upload/v1792946963/curiosity_of_the_space.mp3",
  },
  {
    name: "Deep Massive Space",
    emoji: "🌠",
    url: "https://res.cloudinary.com/hxmlwdvg/video/upload/v1792946950/deep_massive_space.webm",
  },
  {
    name: "Feel the Space",
    emoji: "✨",
    url: "https://res.cloudinary.com/hxmlwdvg/video/upload/v1792946945/feel_the_space.mp3",
  },
  {
    name: "Relaxing with Deep Space",
    emoji: "🌙",
    url: "https://res.cloudinary.com/hxmlwdvg/video/upload/v1792946950/relexing_with_deep_space.webm",
  },
];

export default function Sidebar() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSound, setSelectedSound] = useState(0);
  const [soundMenuOpen, setSoundMenuOpen] = useState(false);

  const playSelectedSound = async (index) => {
    const audio = audioRef.current;
    const sound = spaceSounds[index];

    if (!audio || !sound) return;

    const newVolume = Math.max(volume, 80);

    try {
      if (audio.dataset.soundUrl !== sound.url) {
        audio.src = sound.url;
        audio.dataset.soundUrl = sound.url;
        audio.load();
      }

      audio.loop = true;
      audio.volume = newVolume / 100;

      await audio.play();

      setSelectedSound(index);
      setVolume(newVolume);
      setIsPlaying(true);
    } catch (error) {
      console.error("Could not play space sound:", error);
      setIsPlaying(false);
    }
  };

  const toggleSound = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      await playSelectedSound(selectedSound);
    }
  };

  const handleVolumeChange = async (event) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (!audioRef.current) return;

    audioRef.current.volume = newVolume / 100;

    if (newVolume === 0) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else if (!isPlaying) {
      await playSelectedSound(selectedSound);
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
          loop
          preload="none"
          onError={() => setIsPlaying(false)}
        />

        <div className="mt-4 px-3 pb-3 space-y-3">
          {/* Sound Library */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSoundMenuOpen((open) => !open)}
              aria-expanded={soundMenuOpen}
              className="flex w-full items-center justify-between gap-2 rounded-lg border border-[#293952] bg-[#111d30] px-2 py-2 text-sm text-gray-200 transition hover:border-[#6142BF]"
            >
              <span className="truncate">
                🎵 {soundMenuOpen ? "Sound Songs" : spaceSounds[selectedSound].name}
              </span>
              <span className="shrink-0">{soundMenuOpen ? "▴" : "▾"}</span>
            </button>

            {soundMenuOpen && (
              <div className="absolute bottom-full left-0 z-50 mb-2 max-h-48 w-full overflow-y-auto rounded-lg border border-[#293952] bg-[#0E1A2B] p-1 shadow-xl">
                {spaceSounds.map((sound, index) => (
                  <button
                    key={sound.name}
                    type="button"
                    onClick={() => {
                      playSelectedSound(index);
                      setSoundMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition ${
                      selectedSound === index
                        ? "bg-[#6142BF] text-white"
                        : "text-gray-300 hover:bg-[#1D2949]"
                    }`}
                  >
                    <span>{sound.emoji}</span>
                    <span className="min-w-0 flex-1 truncate">{sound.name}</span>
                    {selectedSound === index && <span>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Speaker + Volume Slider */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleSound}
              aria-label={isPlaying ? "Pause sound" : "Play sound"}
              className="text-xl text-white transition hover:text-[#6142BF]"
            >
              {isPlaying && volume > 0 ? "🔊" : "🔇"}
            </button>

            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              aria-label="Volume"
              className="flex-1 cursor-pointer accent-[#6142BF]"
            />
          </div>

          {/* Volume Value */}
            <div className="flex justify-between -mt-2 pb-2">
            <span className="text-sm text-gray-300">Volume</span>
            <span className="text-sm text-gray-300">{volume}%</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
