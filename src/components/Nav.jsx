import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 20px 0;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  color: ${(props) => props.theme.fontColor};
  margin: 0 10px;

  a {
    color: ${(props) => props.theme.fontColor};
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <Btn>
        <Link to="/styled">Home</Link>
      </Btn>
      <Btn>
        <Link to="/styled/ex1">#1</Link>
      </Btn>
      <Btn>
        <Link to="/styled/ex2">#2</Link>
      </Btn>
    </Wrapper>
  );
};

export default Nav;
