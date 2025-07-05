function Banner({ movies }) {
  const index = Math.floor(Math.random() * movies.length);
  const featuredMovie = {
    title: movies[index].title,
    description: movies[index].overview,
    image: `https://image.tmdb.org/t/p/original${movies[index].backdrop_path}
`,
  };
  return (
    <div className="mt-6 mx-4 p-4 rounded-md relative bg-black">
      <img
        src={featuredMovie.image}
        alt={featuredMovie.title}
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 rounded-md"
      />
      <div className="relative z-10 space-y-4">
        <h1 className="text-4xl font-bold ">{featuredMovie.title}</h1>
        <p className="text-sm md:text-base">{featuredMovie.description}</p>

        <div className="space-x-4">
          <button className="px-4 py-2 rounded text-sm font-medium">
            ▶ Play
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
}
export { Banner };
