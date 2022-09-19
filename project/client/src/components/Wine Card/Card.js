import React from "react";
import { Slider } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const WineCard = ({ post }) => {
  const [value, setValue] = useState(0);
  const [raiting, setRaiting] = useState([]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };
  const onChangeCommittedHandler = (event, newValue) => {
    // const arr = [...raiting];
    // arr.push(newValue);
    // console.log(arr);

    setRaiting([...raiting, newValue]);
    console.log(raiting);
  };
  return (
    <Container>
      <img
        src="https://images.unsplash.com/photo-1590785069862-343f908422d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbmUlMjBib3R0bGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Butilca"
      />

      <Slider
        style={{ top: 30 }}
        value={value}
        min={0}
        max={100}
        onChange={rangeSelector}
        onChangeCommitted={onChangeCommittedHandler}
        valueLabelDisplay="on"
      />
    </Container>
  );
};

export default WineCard;
const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;

  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-right: 1rem;
  }
`;
