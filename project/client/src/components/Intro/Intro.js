import React from "react";
import styled from "styled-components";
import bg from "../../assets/first.png";
import { Link, useHistory, useLocation } from "react-router-dom";
const Intro = () => {
  return (
    <>
      <Container>
        <Logo>
          <img src={bg} alt="" />
        </Logo>

        <h1> Rate Wine App</h1>
        <p>Welcome to wine rate app</p>
        <Link to="/auth">
          <button>LET'S STARTED</button>
        </Link>
      </Container>
    </>
  );
};

export default Intro;

export const Container = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: full;
  height: 100vh;
  img {
    border-radius: 50%;
    width: 200px;
  }
  h1 {
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    z-index: 2;
    text-shadow: 2px 3px 10px rgb(0 0 0 / 0.2);
  }
  p {
    font-size: 13px;
    color: #a6a5a5;
  }
  button {
    border-radius: 30px;
    width: 150px;
    height: 50px;
    font-size: 0.75rem;
    font-weight: 800;
    background-color: #f7434c;
    color: white;
    border: none;
    text-shadow: 2px 3px 10px rgb(255, 255, 255/ 0.2);
  }
`;

export const Logo = styled.div`
  width: 200px;
  border-radius: 50%;
  border: 1px solid transparent;
  z-index: 2;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
