//./src/containers/MoviesPage.js
import React from 'react';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
 
const MoviesPage = ({ movies }) => 
  <div>
    <MoviesList movies={movies} />
  </div>;
 
const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}
 
// export default connect(mapStateToProps)(MoviesPage);

// Failed to compile.

// Error in ./src/containers/MoviesPage.js
// Module not found: ./MovieShow in /Users/rachel/Development/code/react-router-nested-routes-v-000/src/containers

//  @ ./src/containers/MoviesPage.js 36:17-39
// import React from 'react';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import MoviesList from '../components/MoviesList';
// import MovieShow from './MovieShow';
 
// const MoviesPage = ({ match, movies }) => 
//   <div>
//     <MoviesList movies={movies} />
//     <Route path={`${match.url}/:movieId`} component={MovieShow}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a Movie from the list.</h3>
//     )}/>
//   </div>;
 
// const mapStateToProps = (state) => {
//   return {
//     movies: state.movies
//   };
// }
 
export default connect(mapStateToProps)(MoviesPage);