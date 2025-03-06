import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'



const MovieCard = ({ movie, watchlist, setWatchlist }) => {

  const addToWatchlist = (movie) => {setWatchlist(prev => {

      if (!prev.find(m => m.id === movie.id)) {
        const updatedList = [...prev, movie];
        localStorage.setItem("watchlist", JSON.stringify(updatedList));
        return updatedList;
      }

      return prev;
    });
  };

  return (
    <div className="group relative transform transition-transform duration-300 hover:scale-105 hover:z-20">

      <div className="aspect-w-2 aspect-h-3 bg-gray-900 rounded-lg overflow-hidden 
        shadow-movie-card hover:shadow-neon-glow">

        <img 
          src={movie.img} 
          alt={movie.name} 
          className="w-full h-full object-cover group-hover:brightness-125 transition-all duration-300" 
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 
          group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
          
          <h3 className="text-lg font-bold text-white mb-2">{movie.name}</h3>

          <button
            onClick={() => addToWatchlist(movie)}
            className="w-full bg-neon-green/90 py-2 rounded-md font-bold cursor-pointer
            border-1 border-neon-green text-neon-green 
            hover:shadow-neon-glow hover:bg-neon-green/20 hover:border-neon-green/80 hover:text-white transition-colors 
            duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-neon-glow"
          >
            <PlusIcon className="w-5 h-5" />
            Agregar
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default MovieCard