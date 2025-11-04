import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_API_POPULAR } from "../utils/constants";
import { addPopularMovies } from "../redux/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(`${MOVIES_API_POPULAR}?page=1`, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
