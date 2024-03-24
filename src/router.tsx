import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Popular from "../components/Popular";
import CommingSoon from "../components/CommingSoon";
import NowPlaying from "../components/NowPlaying";
import MovieDetail from "../components/MovieDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "popular",
        element: <Popular />,
        children: [
          {
            path: ":id",
            element: <MovieDetail />,
          },
        ],
      },
      {
        path: "comming-soon",
        element: <CommingSoon />,
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
      },
    ],
  },
]);
