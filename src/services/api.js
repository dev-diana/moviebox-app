import axios from "axios";

const apiKey = 'f41d2900dab915cafe0537fbd3f2a5f5';
const baseUrl = 'https://api.themoviedb.org/3';

export async function fetchMovies() {
    try {
     const response = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
     return response.data.results;
   } catch (error) {
     console.error('There&apos;s been an error fetching top-rated movie:', error);
     throw error;
   }
 }

 export const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`);
      return response.data.results;
  
    } catch (error) {
      console.error('There&apos;s been an error searching for movie:', error);
    }
  };

export async function fetchMovieDetailsId (id) {
  try {
    const response = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('There&apos;s been an error fetching movie:', error);
    throw error;
  }
}

export async function fetchMovieGenre () {
  try {
    const response = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`);
    return response.data.genres;
  } catch (error) {
    console.error('There&apos;s been an error fetching movie:', error);
    throw error;
  }
}


 