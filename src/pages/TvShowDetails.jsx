import { useParams } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { useFetchMovieDetails } from "../hooks/useFetchMovieDetails.jsx";
function TvShowDetails() {
  const { id } = useParams();
  const {
    movie: show,
    loading,
    error,
  } = useFetchMovieDetails({ movieId: id, type: "tv" });

  return (
    <div>
      <Header />
      {loading ? (
        <div>{loading}</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="relative w-full text-white h-[80vh]">
            <img
              src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
              alt={show.title}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-md brightness-80 px-5"
            />
            <div className="absolute top-1/3 left-6 z-10 max-w-xl space-y-4">
              <h1 className="text-3xl font-bold px-6 mt-4">{show.title}</h1>
              <p className="text-white px-4 mt-6">{show.overview}</p>
              <div>
                {show.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-2 py-1 text-m cursor-pointer underline"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export { TvShowDetails };
