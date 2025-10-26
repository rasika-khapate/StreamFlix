import React from "react";
import Header from "./Header";

import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />

      <MainContainer />
      <SecondaryContainer />

      {/* MainContainer 
          - Video background
          - VideoDetails
    Secondary Container
          - MoviesList * n
          - VideoCard * n */}
    </div>
  );
};

export default Browse;
