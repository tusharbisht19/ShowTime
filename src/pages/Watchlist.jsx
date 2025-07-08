import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext.jsx";
import { Header } from "../components/Header.jsx";
function Watchlist() {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);
  console.log(watchlist);
  return (
    <div className="p-6 text-white">
      <Header />
      <h1 className="text-4xl mb-4">Watchlist </h1>
      <div className="flex justify-between mb-8">
        <div className="flex">
          <button className="mr-6 py-2 text-center hover:bg-white hover:text-black text-2xl border rounded-md px-4 ">
            All
          </button>
          <button className="mr-6 py-2 text-center hover:bg-white hover:text-black text-2xl border rounded-md px-4 ">
            Movies
          </button>
          <button className="mr-6 py-2 text-center hover:bg-white hover:text-black text-2xl border rounded-md px-4 ">
            TV shows
          </button>
        </div>
        <button className="text-center hover:bg-white hover:text-black text-2xl border rounded-md px-4 py-2">
          Most recent addition
        </button>
      </div>
      {watchlist.map((movie) => (
        <div key={movie.id} className="w-[200px] mb-12 rounded  border">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <button
            onClick={() => removeFromWatchlist(movie.id)}
            className="px-2 mr-4 py-1 border bg-gray-500 hover:bg-white  hover:text-black"
          >
            remove
          </button>
          <button className="px-2 py-1 border bg-gray-500 hover:bg-white  hover:text-black">
            Watch Trailer
          </button>
        </div>
      ))}
    </div>
  );
}

export { Watchlist };
