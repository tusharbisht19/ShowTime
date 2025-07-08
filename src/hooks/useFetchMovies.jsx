import { useState, useEffect } from "react";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
function useFetchMovies({ searchQuery = "", genreId = "", type = "movie" }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let url = "";
    if (searchQuery) {
      url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${searchQuery}`;
    } else if (genreId) {
      url = `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&with_genres=${genreId}`;
    } else {
      url = `https://api.themoviedb.org/3/${type}/popular?api_key=${API_KEY}`;
    }
    async function fetchData() {
      try {
        setLoading(true);

        const response = await fetch(url);
        const data = await response.json();

        setMovies(data.results || []);
      } catch (error) {
        setError(
          type === "movie" ? "Failed to fetch Movies" : "Failed to fetch Shows"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [searchQuery, genreId, type]);

  return { movies, loading, error };
}

export { useFetchMovies };
