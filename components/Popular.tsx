import { useQuery } from "@tanstack/react-query";
import { IMovieDetail, getPopular, makeImagePath } from "../src/api";
import {
  MovieImgContainer,
  MovieImg,
  MovieImgCard,
  MovieTitle,
} from "./movieImgStyles";
import { Link, Outlet } from "react-router-dom";

export default function Popular() {
  const { data } = useQuery({
    queryKey: ["popularData"],
    queryFn: getPopular,
  });
  return (
    <>
      <MovieImgContainer>
        {data
          ? data?.results?.map((popularMovieData: IMovieDetail) => (
              <Link to={`${popularMovieData.id}`} key={popularMovieData.id}>
                <MovieImgCard>
                  <MovieImg
                    src={`${makeImagePath(popularMovieData.poster_path)}`}
                    key={popularMovieData.id}
                  />
                  <MovieTitle>{popularMovieData.title}</MovieTitle>
                </MovieImgCard>
              </Link>
            ))
          : null}
      </MovieImgContainer>
      <Outlet />
    </>
  );
}
