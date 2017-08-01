import * as types from '../actions/ActionTypes';

const initialState = {
    pending: false,
    error: false,
    errorMessasge: "",
    movieData: [],
    searchInput: ""
}

const movieReducer = (state = initialState, action) => {
      switch (action.type) {
          case types.GET_MOVIE_LOADING:
              return Object.assign({}, state, {
                                                  pending: true,
                                                  error: false
                                              });

          case types.GET_MOVIE_SUCCESS:
              return Object.assign({}, state, {
                                                  pending: false,
                                                  movieData: action.payload.data,
                                                  errorMessasge: '',
                                                  searchInput: action.searchInput
                                              });

          case types.GET_MOVIE_ERROR:
              return Object.assign({}, state, {
                                                  pending: false,
                                                  error: true,
                                                  errorMessasge: action.payload.response.data.message,
                                                  movieData: []
                                              });

          default:
              return state;
      }
};

export default movieReducer;
