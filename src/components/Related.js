import React from "react";
import "./style.css";

const Related = ({ related, setMovie }) => {
  //search related movie
  const searchRelated = event => {
    setMovie({ title: event.target.innerHTML });
  };
  return (
    <div className="row">
      <h4 className="margin">Related Movies you could like</h4>
        {related.map(rel => (
         <div className="col s4 hoverable"> <h6 onClick={searchRelated} className="txt" key={Math.random()}>
            {rel.Name}
          </h6></div>
        ))}
      
    </div>
  );
};

export default Related;
