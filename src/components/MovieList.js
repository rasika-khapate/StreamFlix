import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
 

  return (
    <div className="pl-7">
      <h1 className="md:text-2xl text-lg font-semibold py-3 text-white">
        {title}
      </h1>
      <div className="flex overflow-x-auto hide-scrollbar">
        
        <div className="flex gap-x-2">
          {movies?.map((eachMovie) => (
            <MovieCard
              key={eachMovie.id}
              moviesPosterPath={eachMovie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
