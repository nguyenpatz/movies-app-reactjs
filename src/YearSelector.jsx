import React from "react";

function YearSelector(props) {


	// console.log(props.movie);
	// console.log(movie);

	return (
		<option value={props.movie.Year}>{props.movie.Year}</option>
	);
}

export default YearSelector;