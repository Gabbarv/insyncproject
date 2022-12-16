import React, { useState } from "react";
import Movie from "../images/Movie.png";
import Modal from "../Modal/Modal";
const Moviecard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="movies" onClick={() => setShowModal(true)}>
        <div className="img">
          {" "}
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <div className="rating">{movie.vote_average}</div>{" "}
        </div>
        <p>{movie.title}</p>
      </div>
      {showModal && <Modal setShowModal={setShowModal} movie={movie} />}
    </>
  );
};

export default Moviecard;
