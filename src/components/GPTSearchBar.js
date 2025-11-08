import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/config";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovies, clearGPTMovies } from "../redux/GPTSearchSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const searchText = useRef();

  const handleGPTSearchClick = async () => {
    setLoading(true);

    dispatch(clearGPTMovies());
    console.log(searchText.current.value);

    const GPTQuery = `Give me comma separated only 6 movies with only their titles of the following query`;

    const GPTResults = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3.1:free",
      // model: "openai/gpt-oss-20b:free",

      messages: [
        {
          role: "user",
          content: `${GPTQuery} - ${searchText.current.value}`,
        },
      ],
    });
    console.log(
      GPTResults?.choices[0]?.message?.content?.split(",")?.slice(0, -1)
    );

    const GPTMovieName = GPTResults?.choices[0]?.message?.content
      ?.split(",")
      ?.slice(0, -1);

    const SearchGPTMovies = async (eachMovie) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${eachMovie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();

      return json.results;
    };

    const promiseArray = GPTMovieName.map((eachMovie) =>
      SearchGPTMovies(eachMovie)
    );

    const TMDBResults = await Promise.all(promiseArray);

    console.log(TMDBResults);

    dispatch(
      addGPTMovies({ GPTMovieName: GPTMovieName, GPTMovies: TMDBResults })
    );

    setLoading(false);
  };

  return (
    <div className="flex justify-center ">
      {isLoading ? (
        <div className="font-bold text-4xl text-white md:mt-28 mt-44 mx-2 p-2 shadow-lg bg-black opacity-75">
          Fetching Movie Recommendations⏳..
        </div>
      ) : (
        <form
          className=" md:w-1/2 w-full bg-black md:mt-28 mt-44 mx-2 grid grid-cols-12 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[langKey].placeholder}
            className="px-4 py-2 m-2 col-span-9 "
          />
          <button
            className="bg-red-600 px-4 py-2 m-2 rounded-md col-span-3"
            onClick={handleGPTSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      )}
    </div>
  );
};

export default GPTSearchBar;
