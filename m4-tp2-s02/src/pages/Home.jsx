import React from 'react'
import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import WatchlistSidebar from "../components/WatchlistSidebar";
import Header from "../components/Header";


const Home = () => {

  const [watchlist, setWatchlist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist); 
  }, []);


  useEffect(() => {
    if (watchlist.length > 0) {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
  }, [watchlist]);

  
  return (
    <>
      <Header setIsModalOpen = {setIsModalOpen} />

      <main>

        <MovieList 
        watchlist = {watchlist}
        setWatchlist={setWatchlist} 
        />
        
      </main>

      {isModalOpen && (
        <WatchlistSidebar
          watchlist={watchlist}
          setWatchlist = {setWatchlist}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  )
}

export default Home