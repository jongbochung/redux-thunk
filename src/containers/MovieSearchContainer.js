import React, { Component } from 'react';
import MovieSearch from '../components/MovieSearch';
import MovieList from '../components/MovieList';
import { getMovieSearch } from '../actions';
import { connect } from 'react-redux';
import Loading from 'react-loading-animation';

class MovieSearchContainer extends Component {

    render() {
        const { movieSearch, error, errorMessasge, movies, searchInput } = this.props;
          
        return(
            <div>
                <MovieSearch movieSearch={movieSearch}/>
                <Loading isLoading={this.props.pending}>
                </Loading>
                <MovieList movies={movies}
                           error={error}
                           errorMessasge={errorMessasge}
                           searchInput={searchInput}/>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pending: state.pending,
    error: state.error,
    errorMessasge: state.errorMessasge,
    movies: state.movieData,
    searchInput: state.searchInput
});

const mapDispatchToProps = (dispatch) => ({
    movieSearch: (searchBy, searchInput) => dispatch(getMovieSearch(searchBy, searchInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchContainer);
