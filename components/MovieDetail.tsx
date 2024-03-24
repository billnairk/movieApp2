import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovie, makeBgPath } from "../src/api";

export default function MovieDetail() {
  const MovieDetailContainer = styled.div`
    width: 50%;
    background-color: white;
    color: black;
    position: absolute;
    top: 20%;
    left: 25%;
    border-radius: 20px;
    text-align: center;
  `;
  const MovieDetailImg = styled.img`
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    object-fit: cover;
    background: linear-gradient(to top, yellow 50%, transparent 50%);
  `;
  const MovieOverViewDiv = styled.div`
    padding: 10px;
  `;
  const id = useParams<{ id?: string }>().id || "";
  const { data } = useQuery({
    queryKey: ["getMovieData", id],
    queryFn: () => getMovie(id),
  });
  console.log(data);
  return (
    <MovieDetailContainer>
      <MovieDetailImg src={`${makeBgPath(data?.backdrop_path)}`} />
      <MovieOverViewDiv>{data?.overview}</MovieOverViewDiv>
      <div>Budget: {data?.budget}</div>
      <div>Revenue: {data?.revenue}</div>
      <div>Runtime: {data?.runtime}</div>
      <div>Rating: {data?.vote_average}</div>
      <div>Homepage: {data?.homepage}</div>
    </MovieDetailContainer>
  );
}
