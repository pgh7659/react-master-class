import React from "react";
import styled from "styled-components";

const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  margin: auto 0;

  h1 {
    color: ${(props) => props.theme.fontColor};
  }
`;
const StyledHome = () => {
  return (
    <Home>
      <h1>Styled Home</h1>
    </Home>
  );
};

export default StyledHome;
