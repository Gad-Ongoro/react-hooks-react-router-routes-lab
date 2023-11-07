import React from "react";
import { movies } from "../data";

function Movies() {
  // return <div>{/*{code here}*/}</div>;
  let eachMovie = movies.map(mov => {
    return(
    <div key={mov.title}>
      <>{mov.title}</>
      <>{mov.time}</>
      <ul>
        {mov.genres.map(genre => {
          return(
            <li key={genre}>{genre}</li>
          )
        })}
      </ul>
    </div>)
  })
  return(
    <div>
      <h1>Movies Page</h1>      
        {eachMovie}      
    </div>
  );
}

export default Movies;
