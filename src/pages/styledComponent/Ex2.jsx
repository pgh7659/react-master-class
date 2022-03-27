import React from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    border-radius: 50px;
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
  animation: ${animation} 1s infinite;
`;

const Ex2 = () => {
  return (
    <Wrap>
      <Box />
    </Wrap>
  );
};

export default Ex2;
