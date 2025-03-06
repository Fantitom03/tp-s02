import React from 'react'
import { TrashIcon, FilmIcon } from '@heroicons/react/24/outline'

const WatchlistSidebar = ( { watchlist, setWatchlist, setIsModalOpen }) => {


  const onCloseModal = () => setIsModalOpen(false)


  const removeFromWatchlist = (id) => {
    setWatchlist(prev => {
      const updatedList = prev.filter(movie => movie.id !== id);
      localStorage.setItem("watchlist", JSON.stringify(updatedList));
      return updatedList;
    });
  };


  return (
    
    <div 
    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
    onClick={onCloseModal}
    >
      <div 
        className="h-screen w-full md:w-1/3 ml-auto bg-netflix-black/95 border-l-2 border-neon-green/30 shadow-neon-glow overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold text-neon-green hover:text-white transition-colors cursor-default">Mi Lista</h2>
            
            <button 
              onClick={onCloseModal}
              className="text-neon-green hover:text-white text-3xl transition-colors cursor-pointer"
            >
              &times;
            </button>

          </div>

          {watchlist.length === 0 ? (

            <div className="text-center py-16 text-gray-400">
              <FilmIcon className="w-16 h-16 mx-auto mb-4 text-neon-green/30" />
              Tu lista está vacía
            </div>

          ) : (

            <div className="space-y-4">
              {watchlist.map((movie) => (

                <div key={movie.id} className="flex items-center bg-gray-900/50 rounded-lg p-3
                  hover:bg-gray-900 transition-colors group">
                  
                  <img 
                    src={movie.img}
                    alt={movie.name} 
                    className="w-16 h-24 object-cover rounded-md" 
                  />

                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold text-white">{movie.name}</h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <button
                        onClick={() => removeFromWatchlist(movie.id)}
                        className="text-neon-green hover:text-white flex items-center cursor-pointer"
                      >
                        <TrashIcon className="w-5 h-5 mr-1" />
                        Eliminar
                      </button>
                    </div>
                  </div>
                  
                </div>

              ))}
            </div>

          )}
        </div>
      </div>
    </div>
  )
}

export default WatchlistSidebar