import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import { getActors } from '../utils';

const MovieList = ({movies, error, errorMessasge, searchInput}) => {

    const movieList = movies.map(
        (movie, i) => (
            <div key={movie.unit} className="img-container">
                  <img src={movie.poster} className="movie-image" alt={movie.show_title} />
                  <div className="overlay">
                      <div className="overlay-text">Title : {movie.show_title} </div><p></p>
                      <div className="overlay-text">Diretor : {movie.director} </div><p></p>
                      <div className="overlay-text">Rating : {movie.rating}</div><p></p>
                      <div className="overlay-text">Actors : {getActors(movie.show_cast, searchInput, 2)}</div><p></p>
                      <div className="overlay-text">Summary : {movie.summary}</div>
                  </div>
            </div>
        )
    );


    const errorAlert = (
        <div className="alert">
            {errorMessasge}
        </div>
    );

    return (
        <div className="movie-list">
            {error ? errorAlert : movieList}
        </div>
    );
};

MovieList.propTypes = {
    error: PropTypes.bool,
    errorMessasge: PropTypes.string,
    searchInput: PropTypes.string,
    movies: PropTypes.array
};

MovieList.defaultProps = {
    error: false,
    errorMessasge: '',
    searchInput: '',
    movies: []
};

export default MovieList;
