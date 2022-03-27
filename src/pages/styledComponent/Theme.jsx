import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};

  h1 {
    color: ${(props) => props.theme.fontColor};
  }

  button {
    width: 150px;
    height: 50px;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 10px;
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.backgroundColor};
    cursor: pointer;
  }
`;

const Theme = () => {
  return (
    <Wrap>
      <h1>HELLO</h1>
      <button>Change</button>
    </Wrap>
  );
};

export default Theme;
