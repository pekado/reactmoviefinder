import React from "react";
import "./style.css";

const Movie = ({ movieResults }) => {
  //defracturing
  const {
    Title,
    Year,
    Runtime,
    Genre,
    Director,
    Actors,
    Plot,
    Poster
  } = movieResults;
  return (
    <div id="movie" className="row">
      <div className="col s6 ">
        <img
          className="card-image z-depth-3 border hoverable"
          src={Poster}
          alt={Title}
        />
        <div className="card-text margin">
          Year: {Year},<br /> Runtime: {Runtime},<br /> Genre: {Genre},<br />{" "}
          Director: {Director},<br /> Actors: {Actors}.
        </div>
      </div>
      <div className="col s6 ">
        <h2 className="center card-title">{Title}</h2>
        <p>{Plot}</p>
      </div>
    </div>
  );
};

export default Movie;
