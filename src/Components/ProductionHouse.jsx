import React from "react";
import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

export default function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
    {productionHouseList.map((item, index) => (
      <div
        key={index}
        className="relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800 hover:border-[#FFFFF0] 
        before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-gray-200 before:to-gray-700 before:opacity-20 
        after:absolute after:inset-0 after:rounded-lg after:border-[3px] after:border-gray-900 after:opacity-10"
        onMouseEnter={(e) => {
          const video = e.currentTarget.querySelector("video");
          if (video) {
            video.play();
            video.style.opacity = "0.5"; // Keep opacity at 50% when playing
          }
        }}
        onMouseLeave={(e) => {
          const video = e.currentTarget.querySelector("video");
          if (video) {
            video.pause();
            video.currentTime = 0; // Reset on hover out
            video.style.opacity = "0"; // Hide the video when not hovering
          }
        }}
      >
        {/* Video (Hidden initially, appears with 50% opacity on hover) */}
        <video
          src={item.video}
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md opacity-0 transition-opacity duration-300"
        ></video>
  
        {/* Image (Visible at all times) */}
        <img src={item.image} className="w-full rounded-md" />
      </div>
    ))}
  </div>
  


  
  );
}


// this was the basic code and i have upgraded that with the bable  effect with the help of chat gpt
{/* <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
                 <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50'/> 
                <img src={item.image} className='w-full z-[1] opacity-100' /> 
               
            </div>
        ))}
    </div> */}