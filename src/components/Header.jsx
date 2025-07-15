import { useState } from "react";
import { Link } from "react-router-dom";
import { genres } from "../Data/genres.js";
function Header({
  selectedGenreId,
  setSelectedGenreId,
  searchQuery,
  setSearchQuery,
}) {
  const [showSearch, setShowSearch] = useState(0);

  return (
    <div className="flex items-center justify-between bg-black text-white px-6 py-4">
      <div className="text-2xl font-bold text-blue-600">Show Time</div>
      <div className="flex gap-6 text-sm font-medium">
        <Link
          to="/"
          className="hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer"
        >
          Movies
        </Link>
        <Link
          to="/tv"
          className="hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer"
        >
          Tv Shows
        </Link>
        <Link className="hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer">
          Subscription
        </Link>
        <Link
          to="/watchlist"
          className="hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer"
        >
          Watchlist
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <span
            className="text-xl cursor-pointer"
            onClick={() => setShowSearch((prev) => (prev === 1 ? 0 : 1))}
          >
            🔍
          </span>
          {showSearch === 1 && (
            <input
              type="text"
              placeholder="Search Movies or Shows"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="absolute top-full mt-2 left-0 bg-white text-black px-2 py-1 rounded shadow-md w-[200px] text-sm z-50"
            />
          )}
        </div>
        <div className="relative group">
          <div className="text-xl cursor-pointer">
            🔲
            <div className="absolute top-full left-0 mt-2 bg-white text-black rounded p-2 shadow-md hidden group-hover:block z-50">
              <select
                value={selectedGenreId || ""}
                onChange={(e) => setSelectedGenreId(e.target.value)}
                className="bg-black text-white border border-gray-500 rounded px-3 py-1 text-sm"
              >
                <option value="">Select Genre</option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="relative group">
          <Link to="/profile">
            <span className="text-xl cursor-pointer">👤</span>
            <div className="absolute top-full right-0 mt-2 bg-white p-2 rounded shadow-md hidden group-hover:block z-50">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">
                Profile
              </button>
            </div>
          </Link>
        </div>

        <Link
          to="/login"
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
export { Header };
