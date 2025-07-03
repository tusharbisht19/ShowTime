function MovieCard({movie})
{
    return (<div className="w-[150px] flex-shrink-0 transform transition-transform duration-200 hover:scale-105">
     
           <img src={movie.image} alt={movie.title} className="w-full object-cover rounded-md"/>
           <p className="mt-2 text-sm text-center">{movie.title}</p>
    </div>)
}

export {MovieCard};