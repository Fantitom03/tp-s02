import { React, useEffect } from 'react'
import MovieCard from "./MovieCard";
import movies from '../db/movies.json'

const MovieList = ({ watchlist, setWatchlist }) => {

  return (
    <div className="pt-24 bg-netflix-black">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold mb-8 text-white pl-4 border-l-4 border-neon-green 
          hover:scale-101 transition-all duration-300 cursor-default">
          Tendencias
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie}
              watchlist={watchlist} 
              setWatchlist={setWatchlist} 
            />
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default MovieList