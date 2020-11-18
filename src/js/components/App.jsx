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
  addNewMovie(newMovie) {
    this.setState({ movies: [newMovie, ...this.state.movies] });
  }
  handleRemove(title, index) {
    const moviesNew = [...this.state.movies]
    moviesNew.splice(index, 1);
    this.setState({movies: moviesNew})
  }
  render() {
    return (
      <>
        <MovieInfo sendEntry={d => this.addNewMovie(d)} />
        <MovieList movies={this.state.movies} handleRemove={(title, i) => this.handleRemove(title, i)}/>
      </>
    );
  }
}
