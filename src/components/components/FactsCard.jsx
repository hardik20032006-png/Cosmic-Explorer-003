import React, { useState, useEffect, useRef } from "react";
import facts from "../../data/factsData.js";

export default function FactsCard() {
  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
  };

  // Complete journey of facts
  const [factHistory, setFactHistory] = useState([getRandomFact()]);

  // Where we currently are in the journey
  const [currentIndex, setCurrentIndex] = useState(0);

  // Current fact
  const currentFact = factHistory[currentIndex];

  // Refs so handlers always see the LATEST values
  // without needing them in the effect's dependency array
  const factHistoryRef = useRef(factHistory);
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    factHistoryRef.current = factHistory;
  }, [factHistory]);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // RIGHT → move forward or create a new random fact
  const showRandomFact = () => {
    const prevHistory = factHistoryRef.current;
    const idx = currentIndexRef.current;

    if (idx < prevHistory.length - 1) {
      // Already have a "next" fact from before → just move forward
      setCurrentIndex(idx + 1);
    } else {
      // We are at the end → create a new random fact
      const newFact = getRandomFact();
      setFactHistory([...prevHistory, newFact]);
      setCurrentIndex(idx + 1);
    }
  };

  // LEFT → go backward through history
  const showPreviousFact = () => {
    const idx = currentIndexRef.current;
    if (idx === 0) return;
    setCurrentIndex(idx - 1);
  };

  // Keyboard support — listener is attached ONCE, no churn on every keystroke
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        showPreviousFact();
      }

      if (event.key === "ArrowRight") {
        showRandomFact();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center px-10 -translate-y-6">

      {/* Facts Card */}
      <div className="relative w-full h-[570px] bg-[#0E1A2B] rounded-2xl border border-[#6142BF] flex items-center justify-center shadow-2xl">

        {/* Left Arrow */}
        <button
          onClick={showPreviousFact}
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