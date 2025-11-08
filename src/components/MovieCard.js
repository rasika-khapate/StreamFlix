import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ moviesPosterPath }) => {
  return (
    <div className="md:w-28 w-20">
      <img
        alt="movie-posters"
        src={IMG_CDN_URL + moviesPosterPath}
        className="rounded-sm"
      />
    </div>
  );
};

export default MovieCard;
