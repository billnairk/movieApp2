import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  const NavMainDiv = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  `;
  const NavPointer = styled(motion.div)`
    width: 5px;
    height: 5px;
    margin-top: 10px;
    background-color: rgba(255, 38, 71);
    border-radius: 30px;
  `;
  const NavGroup = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const location = useLocation();
  return (
    <>
      <NavMainDiv>
        <Link to="/">
          <NavGroup>
            <div>POPULAR</div>
            {location.pathname.endsWith("/") ||
            location.pathname.match(new RegExp(`^/\\d+$`)) ? (
              <NavPointer layoutId="circle" />
            ) : null}
          </NavGroup>
        </Link>
        <Link to="/comming-soon">
          <NavGroup>
            <div>COMMING SOON</div>
            {location.pathname.endsWith("/comming-soon") ||
            location.pathname.match(new RegExp(`^/comming-soon/\\d+$`)) ? (
              <NavPointer layoutId="circle" />
            ) : null}
          </NavGroup>
        </Link>
        <Link to="/now-playing">
          <NavGroup>
            <div>NOW PLAYING</div>
            {location.pathname.endsWith("/now-playing") ||
            location.pathname.match(new RegExp(`^/now-playing/\\d+$`)) ? (
              <NavPointer layoutId="circle" />
            ) : null}
          </NavGroup>
        </Link>
      </NavMainDiv>
    </>
  );
}
