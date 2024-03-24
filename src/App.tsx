import { Outlet, Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useQuery } from "@tanstack/react-query";
import { IMovieDetail, getPopular, makeImagePath } from "../src/api";
import {
  MovieImgContainer,
  MovieImg,
  MovieImgCard,
  MovieTitle,
  AppDiv,
} from "../components/movieImgStyles";

function App() {
  const { data } = useQuery({
    queryKey: ["popularData"],
    queryFn: getPopular,
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <AppDiv>
      <Nav />
      {data && (
        <MovieImgContainer
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {data.results?.map((popularMovieData: IMovieDetail) => (
            <Link to={`${popularMovieData.id}`} key={popularMovieData.id}>
              <MovieImgCard className="item" variants={item}>
                <MovieImg
                  src={`${makeImagePath(popularMovieData.poster_path)}`}
                  key={popularMovieData.id}
                />
                <MovieTitle>{popularMovieData.title}</MovieTitle>
              </MovieImgCard>
            </Link>
          ))}
        </MovieImgContainer>
      )}
      <Outlet />
    </AppDiv>
  );
}

export default App;
