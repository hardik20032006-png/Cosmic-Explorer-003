import React, { useState } from "react";
import facts from "../factsData";

export default function FactsCard() {
  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
  };

  const [currentFact, setCurrentFact] = useState(getRandomFact);

  const showRandomFact = () => {
    setCurrentFact(getRandomFact());
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-10 -translate-y-6">

      {/* Facts Card */}
      <div className="relative w-full h-[570px] bg-[#0E1A2B] rounded-2xl border border-[#6142BF] flex items-center justify-center shadow-2xl">

        {/* Left Arrow */}
        <button
          onClick={showRandomFact}
          className="
            absolute left-6
            w-18 h-18
            p-0
            rounded-full
            border border-[#6142BF]
            bg-[#1D2949]
            text-white
            text-5xl font-bold
            leading-none
            inline-flex items-center justify-center
            hover:bg-[#6142BF]
            transition
          "
        >
          ‹
        </button>

        {/* Fact Content */}
        <div className="px-32 md:px-40 text-center max-w-5xl">
          <p className="text-gray-100 text-2xl md:text-3xl leading-relaxed">
            {currentFact}
          </p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={showRandomFact}
          className="
            absolute right-6
            w-18 h-18
            p-0
            rounded-full
            border border-[#6142BF]
            bg-[#1D2949]
            text-white
            text-5xl font-bold
            leading-none
            inline-flex items-center justify-center
            hover:bg-[#6142BF]
            transition
          "
        >
          ›
        </button>

      </div>

    </div>
  );
}