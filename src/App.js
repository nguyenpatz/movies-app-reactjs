import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from "./SearchIcon.svg";
import Github from "./Github.svg";

// key: 4159debf
const API_URL = "http://www.omdbapi.com/?apikey=4159debf&";

function App() {

  //state

  const [movies, setMovies] = useState([]);

  const [movieName, setMovieName] = useState("");

  const searchMovies = async (title) => {
    const datas = await fetch(`${API_URL}s=${title}`);

    const data = await datas.json();

    console.log(data.Search);

    setMovies(data.Search);
    setMovieName("");
  }

  useEffect(() => {
    searchMovies("Iron man");
  }, []);

  return (
    <div className="containter">

      <header className="header">

        <div className="header-title">
          <h1>Movies</h1>
        </div>

        <div className="header-searchbox">
          <input className="search-input" value={movieName} onChange={(e) => setMovieName(e.target.value)} type="text" placeholder="Search for movies" />
          <img src={SearchIcon} alt="" className="search-img" onClick={() => searchMovies(movieName)}/>
        </div>   
      </header>

      <main className="movie-container">
        {
          movies?.length > 0 ? (
            movies.map((movie, index) => <MovieCard movie={movie} key={index} />)) 
          : <div>empty</div>
        }
      </main>

      <footer className="footer">
        <p>nguyenpat</p>
        <a href="" className="footer-github">
          <img src={Github} alt="" />
        </a>
      </footer>

    </div>
  );
}

export default App;
