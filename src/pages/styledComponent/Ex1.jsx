import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Father = styled.div`
  display: flex;
`;
const Base = styled.div`
  background-color: ${(props) => props.bgcolor};
  height: 100px;
  width: 100px;
`;
const Circle = styled(Base)`
  border-radius: 50px;
`;
const Btn = styled.button`
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: ${(props) => props.theme.inputBackgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
`;

const Ex1 = () => {
  return (
    <Wrap>
      <Father>
        <Base bgcolor="tomato" />
        <Circle bgcolor="teal" />
      </Father>
      <Father as="header">
        <Btn>Log in</Btn>
        <Btn as="a" href="/">
          Anchor
        </Btn>
      </Father>
      <Father>
        <Input />
        <Input />
        <Input />
        <Input />
      </Father>
    </Wrap>
  );
};

export default Ex1;
