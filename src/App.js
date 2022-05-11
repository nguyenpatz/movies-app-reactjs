import React, { useEffect, useState } from "react";
import './App.css';

// key: 4159debf
const API_URL = "http://www.omdbapi.com/?apikey=4159debf&";

function App() {

  //state

  const [movies, setMovies] = useState([]);

  const [movieName, setMovieName] = useState("");

  const callAPI = async () => {
    
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
