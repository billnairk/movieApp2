import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovie, makeBgPath } from "../src/api";
// import { OverlayHook } from "../hooks/overLayHook";
import OverLayHook from "../hooks/overLayHook";
import { motion } from "framer-motion";

export default function MovieDetail() {
  const MovieDetailContainer = styled(motion.div)`
    width: 50%;
    background-color: white;
    color: black;
    position: absolute;
    top: 10%;
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
  console.log(id);
  const { data } = useQuery({
    queryKey: ["getMovieData", id],
    queryFn: () => getMovie(id),
  });
  const MovieDetailOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.05);
  `;

  return (
    <MovieDetailOverlay onClick={OverLayHook()}>
      <MovieDetailContainer layoutId={String(id)}>
        <MovieDetailImg src={`${makeBgPath(data?.backdrop_path)}`} />
        <MovieOverViewDiv>{data?.overview}</MovieOverViewDiv>
        <div>Budget: {data?.budget}</div>
        <div>Revenue: {data?.revenue}</div>
        <div>Runtime: {data?.runtime}</div>
        <div>Rating: {data?.vote_average}</div>
        <div>Homepage: {data?.homepage}</div>
      </MovieDetailContainer>
    </MovieDetailOverlay>
  );
}
