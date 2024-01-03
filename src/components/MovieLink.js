import React from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

function MovieLink({ myData }) {
  let { id } = useParams();

  let prod = myData.find((elt) => elt.id == id);
  console.log(prod);
  return (
    <div>
      <h1>{prod.title}</h1>
      <p>{prod.description}</p>
      <div>
        <ReactPlayer url={prod.link} />
      </div>
      <div>
        <Link to={"/"}>
          <button>return home</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieLink;
