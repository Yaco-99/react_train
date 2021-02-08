import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailContent from "./DetailContent";
import Header from "./Header";

function MovieDetail() {
  const movieId = useParams().id;

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=064a095d09fe3dff6f8350dae42af935&language=fr`
    );

    const movie = await data.json();

    movie.poster_path =
      "https://image.tmdb.org/t/p/original" + movie.poster_path;
    movie.genres = movie.genres[0].name;

    setMovie(movie);
  };
  document.body.style.background =
    "url(https://image.tmdb.org/t/p/original/" + movie.backdrop_path + ")";

  return (
    <div className="container my-3 dark_bg">
      <Header />
      <section className="d-flex">
        <div className="row">
          <div className="col-md-4 offset-md-1 dark_bg">
            <img className="w-100" src={movie.poster_path} alt="poster" />
          </div>
          <div className="col-md-6 black_bg">
            <h1>Information sur {movie.title}</h1>
            <DetailContent
              title="Titre original :"
              content={movie.original_title}
            />

            <DetailContent title="Genre :" content={movie.genres} />
            <DetailContent title="Synopsis :" content={movie.overview} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MovieDetail;

/* genres: Array(3)
0: {id: 53, name: "Thriller"}
1: {id: 28, name: "Action"}
2: {id: 878, name: "Science-Fiction"} */
