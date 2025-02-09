import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';




const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth


export default function Slider() {
    const [movieList, setMovieList] = useState([])

    const elementRef = useRef() ;  

    const sliderRight= (element)=>{
        element.scrollLeft+=screenWidth-110
    }

    const sliderLeft= (element)=>{
        element.scrollLeft-=screenWidth-110
    }

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos()
            .then(response => {
                // console.log("Trending Movies Data:", ); // Logs the response in the console
                setMovieList(response.data.results)
            })
            .catch(error => {
                console.error("Error fetching trending movies:", error);
            });
    };



    useEffect(() => {
        getTrendingMovies();
    }, []);

    return (
        <>
        {/* //icons of sliding */}
        <HiChevronLeft className="hidden md:block text-white text-[30px] absolute left-0 ml-8 mt-[150px] cursor-pointer" onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className=' hidden md:block text-white text-[30px] absolute right-0 mr-8 mt-[150px] cursor-pointer' onClick={()=>sliderRight(elementRef.current)}/>

        {/* images slider */}
        <div id = 'scrollImages'className='flex overflow-x-auto w-full px-16 py-4
    scrollbar-hide scroll-smooth' ref={elementRef}>
            {movieList.map((item , index)=>(
                <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in' />
            ))}
        </div>
        
        </>
        
    );
}
