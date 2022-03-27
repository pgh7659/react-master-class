import React from "react";
import styled from "styled-components";

const HomeWrap = styled.div`
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
const Home = () => {
  return (
    <HomeWrap>
      <h1>HOME</h1>
    </HomeWrap>
  );
};

export default Home;
