import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  return (
    <Link to={`/movie/:${movie.id}`} className="w-[150px] flex-shrink-0">
      <div className="w-[150px] transform transition-transform duration-200 hover:scale-105">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[225px] object-cover rounded-md
"
        />
      </div>
    </Link>
  );
}

export { MovieCard };
