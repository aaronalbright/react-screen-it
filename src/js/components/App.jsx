import React, { Component } from 'react';
import movieData from '../../data/movies.json';

import MovieInfo from './MovieInfo';
import MovieList from './MovieList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: movieData,
    };
  }
  handleButtonClick(newMovie) {
    this.setState({ movies: [newMovie, ...this.state.movies] });
  }
  render() {
    return (
      <>
        <MovieInfo sendEntry={d => this.handleButtonClick(d)} />
        <MovieList movies={this.state.movies}/>
      </>
    );
  }
}
