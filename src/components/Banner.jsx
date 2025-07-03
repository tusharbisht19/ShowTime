function Banner() {
  const featuredMovie = {
    title: "The Matrix",
    description:
      "A computer hacker learns the true nature of his reality and his role in the war against its controllers.",
    image:
      "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  };
  return (
    <div className="text-white relative h-[450px]">
      <img
        src={featuredMovie.image}
        alt={featuredMovie.title}
        className="w-full h-full brightness-50 object-cover"
      />
      <div className="absolute top-1/2 left-8 max-w-xl space-y-4">
        <h1 className="text-4xl fond-boldw">{featuredMovie.title}</h1>
        <p className="text-sm md:text-base">{featuredMovie.description}</p>

        <div className="space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">
            ▶ Play
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
            {" "}
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
}
export { Banner };
