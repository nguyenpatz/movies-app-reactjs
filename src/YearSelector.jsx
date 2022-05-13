import React from "react";

function YearSelector({movies, setYear, year}) {



	return (
		<>
			{/*<label htmlFor="years">Years</label>*/}
        	<select id="years" onChange={(e) => setYear(e.target.value)}>
        		<optgroup label="Year">
        		<option className="year-option" value="all" defaultValue>All</option>
        	{
        	  movies.map((movie, index) => <option className="year-option" key={index} value={movie.Year}>{movie.Year}</option>)
        	}
        		</optgroup>
        	</select>
			{/*<option value={movie.Year}>{movie.Year}</option>*/}
		</>
	);
}

export default YearSelector;