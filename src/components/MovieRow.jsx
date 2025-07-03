import { MovieCard } from "./MovieCard.jsx";
function MovieRow({ title, movies }) {
  return (
    <div className="px-4">
      <h2 className="text-xl mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export { MovieRow };
