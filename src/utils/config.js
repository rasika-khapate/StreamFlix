import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
  // defaultHeaders: {
  //   "HTTP-Referer": "http://localhost:3000", // Optional. Site URL for rankings on openrouter.ai.
  //   "X-Title": "NetflixGPT", // Optional. Site title for rankings on openrouter.ai.
  // },
});

export default openai;
