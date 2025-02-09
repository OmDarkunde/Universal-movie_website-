import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";


export default function LargeMovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in cursor-pointer'>
    {/* for the vertical posrter we have used these poster path */}
    <img src={IMAGE_BASE_URL+movie.backdrop_path} className='w-[110px] md:w-[260px] m-4 rounded-lg ' /> 
    <h2 className='w-[110px] md:w-[260px] text-white mt-2 m-3 '>{movie.title}</h2>
  </section>
  )
}
