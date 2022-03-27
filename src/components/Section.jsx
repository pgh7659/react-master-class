import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Section = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Section;
