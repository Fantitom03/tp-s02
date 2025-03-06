import React from 'react'

const Header = ({ setIsModalOpen }) => {

  const onOpenModal = () => setIsModalOpen(true)


  return (
    <header className="bg-gradient-to-b from-black to-transparent fixed w-full z-50">

      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="flex items-center space-x-8">
          <h1 className="text-3xl font-bold text-neon-green font-netflix cursor-default hover:scale-110 transition-all duration-300">
            CINE<span className="text-white">FLIX</span>
          </h1>
        </div>

        <button 
          onClick={onOpenModal}
          className="bg-black/50 border-2 border-neon-green text-neon-green px-8 py-2 rounded-md font-bold 
          hover:bg-neon-green/20 hover:border-neon-green/80 hover:text-white hover:scale-105 transition-all duration-300
          text-shadow-glow cursor-pointer"
        >
          MI LISTA
        </button>

      </nav>

    </header>
  )
}

export default Header