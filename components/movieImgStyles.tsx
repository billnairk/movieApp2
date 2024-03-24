import { motion } from "framer-motion";
import styled from "styled-components";

export const MovieImgContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  grid-gap: 30px;
`;
export const MovieImg = styled(motion.img)`
  width: 150px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const MovieImgCard = styled(motion.div)`
  display: flex;
  width: 150px;
  flex-direction: column;
  align-items: center;
`;

export const MovieTitle = styled(motion.span)`
  width: 100%;
  height: 32px;
  text-align: center;
`;

export const AppDiv = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
