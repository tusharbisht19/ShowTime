import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex items-center justify-between bg-black text-white px-6 py-4">
      <div className="text-2xl font-bold text-blue-600">Show Time</div>
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer">
          Home
        </Link>
        <Link to="/movies" className="hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer">
          Movies
        </Link>
        <Link className="hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer">
          Tv Shows
        </Link>
        <Link className="hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer">
          Subscription
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link className="text-xl cursor-pointer">🔍</Link>
        <div className="relative group">
          <Link className="text-xl cursor-pointer">🔲</Link>
          <div className="absolute top-full left-0 mt-2 bg-white text-black rounded p-2 shadow-md hidden group-hover:block z-50">
            <p>Action</p>
            <p>Comedy</p>
            <p>Drama</p>
          </div>
        </div>

        <div className="relative group">
          <Link className="text-xl cursor-pointer">👤</Link>
          <div className="absolute top-full right-0 mt-2 bg-white p-2 rounded shadow-md hidden group-hover:block z-50">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded">
              Sign In
            </button>
          </div>
        </div>

        <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">
          Login
        </button>
      </div>
    </div>
  );
}
export { Header };
