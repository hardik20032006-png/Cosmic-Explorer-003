import React from "react";

export default function AchievementCard({ achievement }) {
  return (
       <div className="bg-[#0E1A2B] border border-[#6142BF] rounded-2xl overflow-hidden shadow-lg hover:border-purple-400 transition flex flex-col h-full">
      
      {/* Image */}
      <div className="h-48 bg-[#111827]">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover"
        />
      </div>

     {/* Content */}
<div className="p-5 flex flex-col flex-1">

  <h2 className="text-xl font-semibold text-white">
    {achievement.title}
  </h2>

  <p className="text-sm text-purple-300 mt-2">
    {achievement.date}
  </p>

  <p className="text-gray-300 mt-3 leading-relaxed">
    {achievement.shortDescription}
  </p>

  <button
    className="
      mt-auto
      self-start
      px-4 py-2
      rounded-lg
      bg-[#6142BF]
      text-white
      hover:bg-purple-500
      transition
    "
  >
    Know More
  </button>

</div>
    </div>
  );
}