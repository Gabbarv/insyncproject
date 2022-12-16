import React from "react";
import "./Modal.css";
import Movie from "../images/Movie.png";

const Modal = ({ setShowModal, movie }) => {
  var mS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(movie.release_date);
  const mon = d.getMonth();
  const year = d.getFullYear();
  const day = d.getDate();
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-top">
          <div className="modal-heading">
            <h3>{movie.title}</h3>
          </div>
          <div
            className="modal-close-button"
            onClick={() => setShowModal(false)}
          >
            X
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-img">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          </div>
          <div className="movie-info">
            <p>
              <span>Release date:</span>&nbsp;{mS[mon]} {day}, {year}
            </p>
            <p>{movie.overview}</p>
            <h4>
              {movie.vote_average}/
              <span>10 ({movie.vote_count} total votes)</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
