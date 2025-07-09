import { useState } from "react";
import { Header } from "../components/Header.jsx";
import { MovieRow } from "../components/MovieRow.jsx";
import { Banner } from "../components/Banner.jsx";
import { genres } from "../Data/genres.js";
import { useFetchMovies } from "../hooks/useFetchMovies.jsx";

function Movies() {
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const selectedGenre = genres.find((genre) => genre.id === selectedGenreId);
  const genreTitle = selectedGenre ? selectedGenre.name : "Popular Movies";

  const { movies, loading, error } = useFetchMovies({
    searchQuery,
    genreId: selectedGenreId,
  });

  return (
    <div>
      <Header
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {loading ? (
        <div className="text-white text-center mt-10">Loading Movies ... </div>
      ) : error ? (
        <div className="text-red-500 text-center mt-10">{error}</div>
      ) : (
        <>
          {movies.length > 0 && <Banner movies={movies} />}
          <MovieRow title={genreTitle} movies={movies} type="movie" />
        </>
      )}
    </div>
  );
}

export { Movies };
