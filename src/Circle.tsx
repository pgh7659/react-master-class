import React, { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
  fontColor?: string;
  fontWeight?: string;
}
const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 3px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.fontWeight};
`;

const CouterButton = styled.button`
  cursor: pointer;
  border: 1px solid whitesmoke;
  background-color: transparent;
  border-radius: 5px;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({ bgColor, borderColor }: CircleProps) => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
      fontColor={counter < 0 ? "red" : undefined}
      fontWeight={counter > 10 ? "bolder" : undefined}
    >
      <CouterButton onClick={increase}>+</CouterButton>
      {counter}
      <CouterButton onClick={decrease}>-</CouterButton>
    </Container>
  );
};

export default Circle;
