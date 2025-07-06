import { useState, useEffect } from "react";
import { Header } from "../components/Header.jsx";
import { MovieRow } from "../components/MovieRow.jsx";
import { Banner } from "../components/Banner.jsx";
import { genres } from "../Data/genres.js";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const selectedGenre = genres.find((genre) => genre.id === selectedGenreId);
  const genreTitle = selectedGenre ? selectedGenre.name : "Popular Movies";
  useEffect(() => {
    async function getMovies() {
      try {
        let response;
        if (selectedGenreId) {
          response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenreId}`
          );
        } else {
          response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
          );
        }
        const data = await response.json();

        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, [selectedGenreId]);

  return (
    <div>
      <Header
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {movies.length > 0 && <Banner movies={movies} />}
      <MovieRow title={genreTitle} movies={movies} />
    </div>
  );
}

export { Movies };
