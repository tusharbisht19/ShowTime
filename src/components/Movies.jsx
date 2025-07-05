import { useState, useEffect } from "react";
import { Header } from "./Header.jsx";
import { MovieRow } from "./MovieRow.jsx";
import { Banner } from "./Banner.jsx";
import { genres } from "../Data/genres.js";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  console.log(700)
  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );

        const data = await response.json();

        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <Header />
      {movies.length > 0 && <Banner movies={movies} />}
      <MovieRow title="Action" movies={movies} />
      <MovieRow title="Sci-fi" movies={movies} />
      <MovieRow title="Comedy" movies={movies} />
    </div>
  );
}

export { Movies };
