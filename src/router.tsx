import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CommingSoon from "../components/CommingSoon";
import NowPlaying from "../components/NowPlaying";
import MovieDetail from "../components/MovieDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":id",
        element: <MovieDetail />,
      },
    ],
  },
  {
    path: "/comming-soon",
    element: <CommingSoon />,
    children: [
      {
        path: ":id",
        element: <MovieDetail />,
      },
    ],
  },
  {
    path: "/now-playing",
    element: <NowPlaying />,
    children: [
      {
        path: ":id",
        element: <MovieDetail />,
      },
    ],
  },
]);
