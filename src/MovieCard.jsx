import React from "react";

const MovieCard = ({movie}) => {
	return (
		<div className="movie">

			<div className="movie-image">
				<img src={movie.Poster !== "N/A" ? `${movie.Poster}` : "https://via.placeholder.com/400"} alt="" />
			</div>

			<div className="movie-info">
				<span>{/*movie.Type*/}</span>
				<h3>{movie.Title}</h3>
			</div>
			
			<div className="movie-year">
				<p>{movie.Year}</p>
			</div>
		</div>
	);
}

export default MovieCard;