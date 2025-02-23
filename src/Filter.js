import React, { useState } from 'react'
import MovieList from './MovieList'
import './filter.css' 

const Filter= ({movies})=>
    {
   // state filterInput :will be paced to MovieList componenet to check value and display list of movies 
   const [filterInput,setFilterInput]=useState('');
   const handleChange = (event) => {
    setFilterInput(event.target.value);
  };

  return (
    <div>
    <div  className="containerSearchBox">
      {/* filter box */}
      <div className="searchBox">
      <i class="bi bi-search" ></i>
      <input  value={filterInput}  onChange={handleChange} className="inputFilter" placeholder=' Filter movies by name or rate '></input>
      </div>
    </div>
     {/* moveList component  */}
    <MovieList movies={movies} filterInput={filterInput} />
    </div>
  )
}

export default Filter
