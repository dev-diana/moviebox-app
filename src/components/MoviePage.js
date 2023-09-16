import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaSpinner } from "react-icons/fa"
import { fetchMovieDetailsId } from "../services/api.js"
import SideBar from "./SideBar.js"
import MovieDetails from "./MovieDetails.js"

export default function MoviePage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetchMovieDetailsId(id)
    .then((moviesData) => {
      setMovie(moviesData);
      console.log(moviesData)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [id])
  
  const genre = movie?.genres?.map((genre) => (
    <p key={genre.id}>{genre.name}</p>
  ))

    const date = new Date(movie?.release_date)
    const dateUTC = new Date(date)
    const dateToUTCString = dateUTC.toDateString()

return (
    <main className="w-full flex gap-x-6 lg:gap-x-10">
    <SideBar />
    <>
      {loading ? 
        <FaSpinner className="flex items-center justify-center w-5 h-5" />:
        <><MovieDetails
          overview={movie.overview}
          voteAverage={movie.vote_average}
          genre={genre}
          yearOfRelease={dateToUTCString}
          movieDuration={movie.runtime}
          movieTitle={movie.title}
          movieBackdrop={movie.backdrop_path}
          movie={movie.title} /></>}
    </>        
  </main>
)
}