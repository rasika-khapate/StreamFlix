import React from "react";

const VideoTitle = ({ mainMovieOnThePlay }) => {
  const { title, overview } = mainMovieOnThePlay;
  return (
    <div className="w-screen aspect-video absolute pt-32 pl-20 text-white bg-gradient-to-r from-black/90 ">
      <h1 className="font-bold text-4xl w-1/2 "> {title}</h1>
      <p className="my-5 w-2/6 line-clamp-4"> {overview}</p>

      <div className="flex gap-5">
        <button className="bg-white hover:bg-opacity-70 text-black px-12 py-2 rounded-md ">
          ▶️ Play
        </button>
        <button className="bg-white hover:bg-opacity-70 text-black px-12 py-2 rounded-md">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
