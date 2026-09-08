import { useEffect, useState } from "react";
import shuttle from "../assets/planet.png";

export const Topbar = () => {
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setUtcTime(
        now.toISOString().slice(11, 19)
      );
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-20 w-full border-b border-white/10 bg-[#050816] px-10 flex items-center">

      {/* LEFT — Logo */}
      <div className="flex items-center gap-10 w-1/3">
        <img
          src={shuttle}
          alt="Cosmic Explorer"
          className="h-15 w-15"
        />

        <span className="text-2xl font-bold text-white">
          Cosmic Explorer
        </span>
      </div>


      {/* CENTER — Search */}
    <div className="flex-1 flex justify-start -translate-x-15">
  <div className="w-full max-w-2xl relative">

    <input
      type="text"
      placeholder="Search the Astro world..."
      className="w-full text-lg rounded-lg border border-white/10 bg-white/5 px-5 py-2 pr-14 text-white placeholder-gray-300 outline-none focus:border-blue-500"
    />

    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl">
      🔍
    </button>

  </div>
</div>


      {/* RIGHT — UTC */}
      <div className="flex items-center gap-50 text-base text-gray-300">
        <div className="text-[26px] text-gray-300 -translate-x-8">
          <span className="text-gray-500">UTC</span>{"   "}
          <span className=" ml-4 font-mono text-white">
            {utcTime}
          </span>
        </div>
      </div>

    </header>
  );
};