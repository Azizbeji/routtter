import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
function MovieCard({ imgURL, title, rating, release, description, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="MovieCard">
        <div className="card">
          <div className="imgWrapper">
            <img src={imgURL} alt="Movie Poster" width={"100%"} />
            <div className="releaseDate">
              <p>Release Date: {release}</p>
              <p>{description}</p>
            </div>
          </div>
          <div className="cardBody">
            <abbr title={title}>
              <h2>{title}</h2>
            </abbr>
            <p>Rating: {rating}/10</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
MovieCard.defaultProps = {
  imgURL:
    "https://americandurafilm.com/wp-content/uploads/2022/06/No-Image-Placeholder.png",
  title: "Unavailable title",
  genres: "Unavailable",
  release: "Unavailable",
  description: "Unavailable description",
};
export default MovieCard;
