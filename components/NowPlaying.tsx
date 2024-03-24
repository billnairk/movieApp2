import { useQuery } from "@tanstack/react-query";
import {
  MovieImg,
  MovieImgCard,
  MovieImgContainer,
  MovieTitle,
} from "./movieImgStyles";
import { IMovieDetail, getNowPlaying, makeImagePath } from "../src/api";

export default function NowPlaying() {
  const { data } = useQuery({
    queryKey: ["nowPlayingData"],
    queryFn: getNowPlaying,
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
