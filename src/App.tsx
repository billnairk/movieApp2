import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import styled from "styled-components";

function App() {
  const AppDiv = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  return (
    <AppDiv>
      <Nav />
      <Outlet />
    </AppDiv>
  );
}

export default App;
