import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="flex justify-center ">
      <form className="w-1/2 bg-black mt-28 grid grid-cols-12 ">
        <input
          type="text"
          placeholder={lang[langKey].placeholder}
          className="px-4 py-2 m-2 col-span-9 "
        />
        <button className="bg-red-600 px-4 py-2 m-2 rounded-md col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
