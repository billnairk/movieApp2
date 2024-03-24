import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  const NavMainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  `;
  return (
    <>
      <NavMainDiv>
        <Link to="/popular">
          <div>POPULAR</div>
        </Link>
        <Link to="/comming-soon">
          <div>COMMING SOON</div>
        </Link>
        <Link to="/now-playing">
          <div>NOW PLAYING</div>
        </Link>
      </NavMainDiv>
    </>
  );
}
