import { createContext, useContext, useState } from "react";
const WatchlistContext = createContext();
function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);
  function addToWatchlist(movie) {
    setWatchlist((prev) => [...prev, movie]);
  }
  function removeFromWatchlist(movieId) {
    setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId));
  }
  return(
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}
export { WatchlistContext, WatchlistProvider };
