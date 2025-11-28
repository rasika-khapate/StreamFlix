import RED_BG from "../abstract-red-background-vertical-lines-strips.jpg";

export const streamFlix_LOGO =
  "https://hackster.imgix.net/uploads/attachments/195488/steamflix%20logo.png?auto=compress%2Cformat&w=740&h=555&fit=max";

export const streamFlix_BACKGROUND_IMG = RED_BG;

export const TS_USER_ICON =
  "https://charts-static.billboard.com/img/2006/07/taylor-swift-vug-344x344.jpg";

export const MOVIES_API_NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing";

export const MOVIES_API_POPULAR = "https://api.themoviedb.org/3/movie/popular";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
