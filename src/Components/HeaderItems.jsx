import React from 'react'

import { useState } from "react";

export default function HeaderItems({ name, Icon }) {
  const [showText, setShowText] = useState(false);

  return (
    <div 
      className="text-white flex items-center gap-2 md:gap-3 text-sm md:text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2 p-2 rounded-md transition-all duration-200 ease-in-out active:scale-95"
      onClick={() => setShowText(!showText)} // Toggle text visibility
    >
      <Icon className="text-lg md:text-xl" />
      <h2 className={`text-[13px] sm:text-[15px] md:block ${showText ? "block" : "hidden"} sm:block transition-opacity duration-300`}>
        {name}
      </h2>
    </div>
  );
}
