import React from 'react';
import './Movie.css';

function Movie(props) {
    const discFormat = props.format;

    if (discFormat === "bluray") {
    return  <div className="Bd-item">
                <h2>This item is a Blu-ray: {props.title} by {props.director}</h2>
            </div>
  }

  if(discFormat ==="dvd") {
    return  <div className="Dvd-item">
                <h2>This item is a DVD: {props.title} by {props.director}</h2>
            </div>
  }

    return  <div className="Movie-item">
                <h2>This item is a Movie: {props.title} by {props.director}</h2>
            </div>

}

  Movie.defaultProps = {
    title: "Untitled",
    director: "Alan Smithee",
    format: "none"
  }

  export default Movie;
