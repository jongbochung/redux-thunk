import * as types from './ActionTypes';
import axios from 'axios';

export const getMovieLoading = () => ({
    type: types.GET_MOVIE_LOADING
});

export const getMovieSuccess = (payload, searchInput) => ({
    type: types.GET_MOVIE_SUCCESS,
    payload,
    searchInput    
});

export const getMovieError = () => ({
    type: types.GET_MOVIE_ERROR
});


function getMovieAPI(searchBy, searchInput) {
    return axios.get(`https://netflixroulette.net/api/api.php?${searchBy}=${searchInput}`)
}


export const getMovieSearch = (searchBy, searchInput) => dispatch => {
    dispatch({type: types.GET_MOVIE_LOADING});

    return getMovieAPI(searchBy, searchInput).then(
                (response) => {
                      dispatch({
                          type: types.GET_MOVIE_SUCCESS,
                          payload: response,
                          searchInput
                      })
                }
          ).catch(error => {
              dispatch({
                  type: types.GET_MOVIE_ERROR,
                  payload: error
              });
          })
}
