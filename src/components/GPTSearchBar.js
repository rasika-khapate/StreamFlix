import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const isLoading = false;

  const searchText = useRef();

  const handleGPTSearchClick = () => {
    return true;
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
