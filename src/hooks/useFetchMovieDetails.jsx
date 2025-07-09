import { useState, useEffect } from "react";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
function useFetchMovieDetails({ type = "movie",movieId="" }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let url = "";
    if(movieId)
    {
      url = `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${API_KEY}`;
    }
    async function fetchData() {
      try {
        setLoading(true);

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setMovie(data || {});
      } catch (error) {
        setError(
          type === "movie" ? "Failed to fetch Movie" : "Failed to fetch Show"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [type,movieId]);

  return { movie, loading, error };
}

export { useFetchMovieDetails };
