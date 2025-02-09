import React from 'react'

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
// the image and the style of it
export default function MovieCard({movie}) {
  return (
    <>
      {/* for the vertical posrter we have used these poster path */}
      <img src={IMAGE_BASE_URL+movie.poster_path} className='w-[110px] md:w-[200px] m-4 rounded-lg hover:border-[3px] border-white hover:scale-110 transition-all duration-150 ease-in cursor-pointer' /> 
    </>
  )
}
