import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movies)
  if (!movies) return;

  const mainMovieOnThePlay = movies[2];
  // console.log(mainMovieOnThePlay);

  return (
    <div>
      <VideoTitle mainMovieOnThePlay={mainMovieOnThePlay} />
      <VideoBackground mainMovieOnThePlay={mainMovieOnThePlay} />
    </div>
  );
};

export default MainContainer;
