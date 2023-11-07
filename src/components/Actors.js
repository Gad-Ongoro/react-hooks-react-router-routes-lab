import React from "react";
import { actors } from "../data";

function Actors() {
  // return <div>{/*{code here}*/}</div>;
  let eachActor = actors.map(act => {
    return(
      <div key={act.name}>
        <>{act.name}</>
        <ul>
          {act.movies.map(mov => {
            return(
              <li key={mov}>{mov}</li>
            )
          })}
        </ul>
      </div>
    )
  })
  return(
    <div>
      <h1>Actors Page</h1>
      {eachActor}
    </div>
  );
}

export default Actors;
