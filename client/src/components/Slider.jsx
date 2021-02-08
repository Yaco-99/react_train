import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Slider(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/${props.link}`);

    const movies = await data.json();
    movies.results.forEach((element) => {
      if (element) {
        element.poster_path =
          "https://image.tmdb.org/t/p/w500" + element.poster_path;
      }
    });
    setMovies(movies.results);
  };

  return (
    <section className="dark_bg px-3">
      <h2>{props.title}</h2>
      <div className="row d-flex flex-nowrap movie_slider">
        {movies.map((movie) => (
          <div className="col-4 col-md-2" key={movie.id}>
            <Link to={`movie/${movie.id}`}>
              <img
                src={movie.poster_path}
                className="d-block w-100"
                alt="poster"
              ></img>
              <h6>{movie.title}</h6>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Slider;
