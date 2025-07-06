import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/header.jsx";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setMovie(data);
    }
    fetchDetails();
  }, [id]);
  if (!movie.title)
    return <div className="text-white px-6 py-4">Loading...</div>;
  return (
    <div>
      <Header />
      <div className="relative w-full text-white h-[80vh]">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md brightness-80 px-5"
        />
        <div className="absolute top-1/3 left-6 z-10 max-w-xl space-y-4">
          <h1 className="text-3xl font-bold px-6 mt-4">{movie.title}</h1>
          <p className="text-white px-4 mt-6">{movie.overview}</p>
          <div>
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="px-2 py-1 text-m cursor-pointer underline"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export { MovieDetails };
