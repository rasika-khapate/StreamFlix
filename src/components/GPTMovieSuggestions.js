import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.GPT);

  const { GPTMovies, GPTMovieName } = gpt;

  return (
    <>
      {GPTMovieName && (
        <div className=" bg-black bg-opacity-90 p-3 mt-9 text-white">
          {GPTMovieName?.map((movie, index) => (
            <MovieList
              key={GPTMovieName}
              title={movie}
              movies={GPTMovies?.[index] ?? []}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default GPTMovieSuggestions;
