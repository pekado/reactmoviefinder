import React, { useState } from "react";

const Form = ({ setMovie }) => {
  //definir movie
  const [busqueda, setBusqueda] = useState({
    title: "",
    year: ""
  });
  const [error, setError] = useState(false);
  //funcione que trae value del input
  const handleChange = event => {
    setBusqueda({
      ...busqueda,
      [event.target.name]: event.target.value
    });
  };
  //extraer valores
  const { title, year } = busqueda;

  const sendMovie = event => {
    event.preventDefault();
    if (title.trim() === "") {
      setError(true);
      return;
    } else {
      setError(false);
      setMovie(busqueda);
    }
  };

  return (
    <form onSubmit={sendMovie}>
      <div className="input-field">
        <div className="row card-panel lighten-4">
          {error ? <p>Fill the inputs please</p> : null}
          <div className="block col s-12">
            <label className=" blue-grey-text darken-3 flow-text">
              You don´t know what to watch? Search a movie or a TV show that you
              like and we will recommend you 20 related options.
            </label>
            <h6 className="blue-grey-text darken-3">Title</h6>
            <input
              type="text"
              placeholder="For example: 'Batman'"
              name="title"
              onChange={handleChange}
              value={title}
            />
          </div>
          <div className="col s-3">
            <h6 className=" blue-grey-text darken-3 ">Year</h6>
            <input
              type="text"
              name="year"
              placeholder="In case you need it. Example: '1989'"
              onChange={handleChange}
              value={year}
            />
            <button
              type="submit"
              className="waves-effect waves-light btn blue-grey lighten-2 margin-top"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
