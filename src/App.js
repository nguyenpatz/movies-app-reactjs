import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import YearSelector from "./YearSelector";
import './App.css';
import SearchIcon from "./SearchIcon.svg";
import Github from "./Github.svg";

// key: 4159debf
const API_URL = "https://www.omdbapi.com/?apikey=4159debf&";
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://www.omdbapi.com/?t=spider+man&y=2019

function App() {

  //state

  const [movies, setMovies] = useState([]);

  const [movieName, setMovieName] = useState("");

  const [year, setYear] = useState("Select");

  const [filterMovies, setFilterMovie] = useState([]);

  const searchMovies = async (title) => {


    const datas = await fetch(`${API_URL}s=${title}`);

    const data = await datas.json();

    // console.log(data.Search);
    // console.log(data);
    if(data.Search) {

    setMovies(data.Search);

    setMovieName(""); // when click search input, state movieName is empty
    }
    
  }

  const selectYear = () => {
    if(year !== "all") {
      setFilterMovie(movies.filter(movie => movie.Year === year));
    }
    else {
      setFilterMovie(movies.filter(movie => movie.Year !== ""));
    }
  }

  // useEffect

  useEffect(() => {
      searchMovies("Iron man");
  }, []);

// use this when no button search. input always search when you are typing
  // useEffect(() => {
  //   searchMovies(movieName);
  // }, [movieName]);

  useEffect(() => {
    selectYear();
  }, [movies,year]);

  useEffect(() => {
    setYear("all");
  }, [movies]);

 
  return (
    <div className="containter">

      <header className="header">

        <div className="header-title">
          <h1>Movies</h1>
        </div>

        <div className="header-searchbox">
          <input className="search-input" value={movieName} onChange={(e) => setMovieName(e.target.value)} type="text" placeholder="Search for movies" />
          {<img src={SearchIcon} alt="" className="search-img" onClick={() => searchMovies(movieName)}/>}
        </div>   

        <section className="year-container">
          <YearSelector setYear={setYear} year={year}movies={movies}/>
        </section>
      </header>

      

      <main className="movie-container">
        {
           filterMovies?.length > 0 ? (
            filterMovies.map((movie, index) => <MovieCard movie={movie} key={index} />)) 
          : <div>empty</div>
        }


 
      </main>

      

      <footer className="footer">
        <p>nguyenpat</p>
        <a href="https://github.com/nguyenpatz" className="footer-github" target="_blank">
          <img src={Github} alt="" />
        </a>
      </footer>

    </div>
  );
}

export default App;
