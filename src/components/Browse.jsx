import { Header } from "./Header.jsx";
import { MovieRow } from "./MovieRow.jsx";
import { Banner } from "./Banner.jsx";
import { useState, useEffect } from "react";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const dummyMovies = [
  {
    id: 1,
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w1280/zrNKUa5SBUwue39coJArNdDgQJM.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];

function Browse() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    async function getMovies() {
      try {
        const response =
          await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

        const data = await response.json();

        setMovies(data);
        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  },[movies]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Banner />
      <div className="mt-4 space-y-10">
        <MovieRow title="Trending Now" movies={dummyMovies} />
        <MovieRow title="Action Thrillers" movies={dummyMovies} />
        <MovieRow title="Top Rated" movies={dummyMovies} />
      </div>
    </div>
  );
}

export { Browse };
