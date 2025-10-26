import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_API } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(`${MOVIES_API}?page=1`, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
