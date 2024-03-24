import { useQuery } from "@tanstack/react-query";
import { IMovieDetail, getComingSoon, makeImagePath } from "../src/api";
import {
  MovieImg,
  MovieImgCard,
  MovieImgContainer,
  MovieTitle,
} from "./movieImgStyles";

export default function CommingSoon() {
  const { data } = useQuery({
    queryKey: ["getComingSoonData"],
    queryFn: getComingSoon,
  });
  return (
    <MovieImgContainer>
      {data
        ? data?.results?.map((popularMovieData: IMovieDetail) => (
            <MovieImgCard>
              <MovieImg
                src={`${makeImagePath(popularMovieData.poster_path)}`}
                key={popularMovieData.id}
              />
              <MovieTitle>{popularMovieData.title}</MovieTitle>
            </MovieImgCard>
          ))
        : null}
    </MovieImgContainer>
  );
}
