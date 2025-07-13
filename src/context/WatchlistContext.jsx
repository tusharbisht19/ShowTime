import { createContext, useState, useEffect } from "react";
const WatchlistContext = createContext();
function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);
  const token = localStorage.getItem("token");
  async function addToWatchlist(movie) {
    const { id, poster_path, title, mediaType } = movie;
    try {
      const response = await fetch(`http://localhost:5001/api/user/watchlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: {
          movieId: id,
          title,
          poster: poster_path,
          mediaType,
        },
      });

      if (!response.ok) throw new Error("Failed to add to watchlist");
      const data = await response.json();
      setWatchlist(data.watchlist);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async function removeFromWatchlist(movieId) {
    try {
      const response = await fetch(
        `http://localhost:5001/api/user/watchlist/${movieId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to remove from watchlist");
      const data = await response.json();
      setWatchlist(data.watchlist);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function fetchWatchlist() {
    try {
      const response = await fetch(`http://localhost:5001/api/user/watchlist`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch Watchlist");

      const data = await response.json();
      setWatchlist(data.watchlist);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  useEffect(() => {
    fetchWatchlist();
  }, []);
  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist, fetchWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}
export { WatchlistContext, WatchlistProvider };
