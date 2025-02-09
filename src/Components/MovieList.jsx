import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import LargeMovieCard from "./LargeMovieCard";



export default function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null); // ✅ Added useRef

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]); // ✅ Added genreId as a dependency

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const slideRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += 500;
    }
  };

  const slideLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= 500;
    }
  };

  return (
    <div className="relative">
      {/* Left Scroll Button */}
      <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>

      {/* Movie List */}
      <div
        ref={elementRef} // ✅ Added ref to the scrollable div
        className="flex overflow-x-auto scrollbar-hide scroll-smooth pt-5 px-3 pb-5"
      >
        {movieList.map((item, index) => (
          <>
            {index_%3 === 0?<LargeMovieCard movie={item}/>:<MovieCard key={index} movie={item} />}
          </> // ✅ Added key prop
        ))}
      </div>

      {/* Right Scroll Button */}
      <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  );
}
