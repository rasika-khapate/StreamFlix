import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="md:-mt-56  relative z-50">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Documentary"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Romance"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
