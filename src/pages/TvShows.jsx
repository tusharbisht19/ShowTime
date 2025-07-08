import { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Banner } from "../components/Banner.jsx";
import { MovieRow } from "../components/MovieRow.jsx";
import { useFetchMovies } from "../hooks/useFetchMovies.jsx";
function TvShows() {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    movies: shows,
    loading,
    error,
  } = useFetchMovies({ searchQuery, type: "tv" });
  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading ? (
        <div className="text-white text-center mt-10">Loading Shows ...</div>
      ) : error ? (
        <div className="text-red-500 text-center mt-10">{error}</div>
      ) : (
        <>
          {shows.length > 0 && <Banner movies={shows} />}
          <MovieRow title="Popular shows" movies={shows} />
        </>
      )}
    </div>
  );
}
export { TvShows };
