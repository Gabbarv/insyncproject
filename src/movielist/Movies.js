import React, { useEffect, useState } from "react";
import "./Movie.css";
import Movie from "../images/Movie.png";
import Moviecard from "./Moviecard";


const Movies = ({ search }) => {
  const [movies, setMovies] = useState("");

  useEffect(() => {console.log(process.env.API_KEY)}, [movies]);

  useEffect(() => {
    if (search !== "") {
      setMovies("");
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });

      console.log(movies);
    } else {
      fetch(
       ` https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [search]);
  return (
    <>
      {movies === "" ? (
        <h1>Loading...</h1>
      ) : (
        <div className="parent">
         
          {movies.map((movie) => {
            return <Moviecard movie={movie} />;
          })}
        </div>
      )}
    </>
  );
};

export default Movies;
