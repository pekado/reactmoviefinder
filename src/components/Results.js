import React, { Fragment } from "react";
import Related from "./Related";
import Movie from "./Movie";



const Results = ({ related, movieResults, setMovie }) => {
  return (
    <Fragment>
      <Movie movieResults={movieResults} />
      <Related related={related} setMovie={setMovie} />
    </Fragment>
  );
};

export default Results;
