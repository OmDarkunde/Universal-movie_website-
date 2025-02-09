import axios from 'axios';

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "d7f1757f8a67e40f5d2900cbb133a22e";

const getTrendingVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};

const getMovieByGenreId = (id) => {
    return axios.get(`${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${id}`);
};

export default { getTrendingVideos, getMovieByGenreId };

