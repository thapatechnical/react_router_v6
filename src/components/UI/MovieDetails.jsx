/* eslint-disable react/prop-types */
import { NavLink, useLoaderData } from "react-router-dom";
import "../UI/Card.css";

export const MovieDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  const { Actor, Poster, Title, Type, Year, Plot, BoxOffice, imdbID } =
    movieData;

  return (
    <li className="hero-container hero-movie-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={Title} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <h4 className="ticket__movie-title">{Title}</h4>
            <p>{Plot}</p>
            <p className="ticket__current-price">Type: {} </p>
            <p className="ticket__current-price">Type: </p>
            <button className="ticket__buy-btn">Watch now</button>
          </div>
        </div>
      </div>
    </li>
  );
};
