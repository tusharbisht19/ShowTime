import { MovieCard } from "./MovieCard.jsx";
function MovieRow({ title, movies, type }) {
  return (
    <div className="px-4 mb-10">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} type={type} />
        ))}
      </div>
    </div>
  );
}

export { MovieRow };
