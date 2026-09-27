import React from "react";
import { Link } from "react-router-dom";

export default function ScientistCard({ scientist }) {
  return (
    <div className="bg-[#0E1A2B] border border-[#6142BF] rounded-2xl overflow-hidden shadow-lg hover:border-purple-400 transition flex flex-col h-full">

      {/* Image */}
      <div className="h-48 bg-[#111827] mx-2 mt-2 rounded-xl overflow-hidden">
        <img
          src={scientist.image}
          alt={scientist.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        <h2 className="text-xl font-semibold text-white">
          {scientist.name}
        </h2>

        <p className="text-sm text-purple-300 mt-1">
          Country: {scientist.country}
        </p>

        <p className="text-gray-300 mt-2 leading-relaxed">
          {scientist.workOn}
        </p>

        {/* Know More */}
        <Link
          to={`/scientists/${encodeURIComponent(scientist.name)}`}
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
        </Link>

      </div>
    </div>
  );
}