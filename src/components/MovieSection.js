import { useEffect, useState } from "react"
import { fetchMovies, fetchMovieGenre } from "../services/api.js"
import { FaAngleRight, FaSpinner } from "react-icons/fa"
import MovieCard from "./MovieCard.js"

export default function MovieSection() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [genres, setGenres] = useState([]);
  
    useEffect(() => {
      fetchMovies()
      .then((moviesData) => {
        setMovies(moviesData.slice(0, 10));
        console.log(moviesData)
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoading(false);
        });
      
      
      fetchMovieGenre()
        .then(genre => {
          setGenres(genre)
          
        }).catch(error => {
        console.error('Error:', error);
      })
      console.log(movies)
    }, [])
  
    function getMovieGenre(genreId) { 
      if (genres) {
        return genreId?.map((id) => genres?.find((genre) => genre.id === id).name)
       .join(', ')
      } else {
        return "genres"
      }
       
    }
  
    return (
      <section className="px-4 md:px-6 lg:px-24 pb-10 my-20">
        <div className="flex justify-between items-center flex-wrap gap-y-2 mb-11 gap-x-20 ">
          <h1 className="font-medium text-2xl md:text-5xl">Featured Movie</h1>
          <button className="flex items-center gap-x-1 text-red-700 text-sm md:text-lg">See more <FaAngleRight/></button>
        </div>
      
        <>
            {/* Loading animation  */}
            {(loading) && <FaSpinner size={48} />} 
            
            {/* Featured Movie section  */}
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-20 mx-5 sm:mx-0">
            {movies.map((movie) => (
              <MovieCard
                releaseDate={movie.release_date.slice(0, 4)}
                key={movie.id}
                id={movie.id}
                movieTitle={movie.title}
                moviePoster={movie.poster_path}
                movieGenre={getMovieGenre(movie.genre_ids)}
              />
            ))}
              </div>
          
        </>
      </section>
    )
  }
  

