import React from "react";

const VideoTitle = ({ mainMovieOnThePlay }) => {
  const { title, overview } = mainMovieOnThePlay;
  return (
    <div className="aspect-video absolute md:pt-32 md:pl-20 pt-[110px] pl-7 text-white bg-gradient-to-r from-black/90 ">
      <h1 className="font-bold md:text-4xl md:w-1/2 text-base w-3/4"> {title}</h1>
      <p className="md:my-5 my-2 md:w-2/6 w-5/6 md:text-base text-sm md:line-clamp-4 line-clamp-2"> {overview}</p>

      <div className="flex gap-5">
        <button className="bg-white hover:bg-opacity-70 text-black md:px-12 md:py-2 px-6 py-0.5 md:text-base text-sm rounded-md ">
          ▶️ Play
        </button>
        <button className="bg-white hover:bg-opacity-70 text-black md:px-12 md:py-2 px-6 py-0.5 md:text-base text-sm rounded-md">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
