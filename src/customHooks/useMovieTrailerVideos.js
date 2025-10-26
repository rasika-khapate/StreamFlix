import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailerVideos = (id) => {
  // fetch trailer video and update the store

  const dispatch = useDispatch();

  const getMoviesData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const findData = json.results.find((video) => video.type === "Trailer");
    const trailer = findData ? findData : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesData();
  }, [id]);
};

export default useMovieTrailerVideos;
