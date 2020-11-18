import React, { Component } from 'react';
import movieData from '../../data/movies.json';

import MovieList from './MovieList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: movieData,
    };
  }
  render() {
    return <MovieList movies={this.state.movies} />;
    // <MovieInfo>
    // <AddMovieBtn>
  }
}
