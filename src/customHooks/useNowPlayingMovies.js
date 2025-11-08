import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIES_API_NOW_PLAYING } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(`${MOVIES_API_NOW_PLAYING}?page=1`, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
   !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
