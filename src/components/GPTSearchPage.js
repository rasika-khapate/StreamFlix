import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearGPTMovies } from "../redux/GPTSearchSlice";

const GPTSearchPage = () => {
  const dispatch = useDispatch();

  dispatch(clearGPTMovies());

  return (
    <>
      <div className="fixed -z-10 opacity-90">
        <img
          src={NETFLIX_BACKGROUND_IMG}
          alt="netflix-background"
          className="h-screen object-cover md:h-auto"
        />
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearchPage;
