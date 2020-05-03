import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import Spinner from "./components/Spinner";

function App() {
  //STATE DE BUSQUEDA
  const [movie, setMovie] = useState({});
  const { title, year } = movie;
  const [related, setRelated] = useState([]);
  const [movieResults, setMovieResults] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [initial, setInitial] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    if (Object.keys(movie).length === 0) return;
    const consultarApi = async () => {
      const url = ` https://www.omdbapi.com/?apikey=9f047769&t=${title}&y=${year}&plot=full`;
      const urlRelated = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${title}&k=367650-reccon-VH85SC69&type=movies&info=1`;
      const [movieResult, relatedResult] = await Promise.all([
        fetch(url).then(response => response.json()),
        fetch(urlRelated).then(response => response.json())
      ]);

      setSpinner(true);
      setInitial(false);
      setMovie({});
      console.log(movieResult.Response);

      setTimeout(() => {
        if (movieResult.Response === "False") {
          console.log("error");
          setSpinner(false);
          setError(true);
        } else {
          setRelated(relatedResult.Similar.Results);
          setMovieResults(movieResult);
          setSpinner(false);
        }
      }, 3000);
    };
    consultarApi();
  }, [movie]);
  //condicional de componenetes
  const component = error ? (
    <h2 className="blue-grey-text darken-3">Nothing found!</h2>
  ) : spinner || Object.keys(movie).length !== 0 ? (
    <Spinner />
  ) : (
    <Results
      related={related}
      movieResults={movieResults}
      setMovie={setMovie}
    />
  );

  return (
    <div className="container">
      <Form setMovie={setMovie} />
      <div className="center card-panel">
        {initial ? (
          <h3 className="blue-grey-text darken-3">Results will be here!</h3>
        ) : (
          component
        )}
      </div>
    </div>
  );
}

export default App;
