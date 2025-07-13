import { Link } from "react-router-dom";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
function MovieCard({ movie, type }) {
  const { addToWatchlist } = useContext(WatchlistContext);
  return (
    <div className="w-[350px] flex-shrink-0">
      <Link to={`/${type}/${movie.id}`}>
        <div className="w-[350px] transform transition-transform duration-200 hover:scale-105">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-[225px] object-cover rounded-md
"
          />
        </div>
      </Link>
      <button
        onClick={() => addToWatchlist(movie)}
        className="mt-2 w-10 h-10 flex items-center justify-center text-3xl text-white rounded-full bg-gray-400"
      >
        +
      </button>
    </div>
  );
}

export { MovieCard };
