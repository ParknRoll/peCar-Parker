/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Park = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Info = styled.p``;

const Display = (props) => {
  return (
    <Container>
      <Park>
        <h1>Number</h1>
        <h1>Lot Type</h1>
        <h1>Total Lot</h1>
        <h1>Available Lot</h1>
        <h1>Last Updated</h1>
      </Park>
      {props.carparks.map((carpark) => (
        <Park key={carpark.number}>
          <Info>{carpark.number}</Info>
          <Info>{carpark.lots_type}</Info>
          <Info>{carpark.lots_total}</Info>
          <Info>{carpark.lots_available}</Info>
          <Info>{carpark.updated_datetime}</Info>
        </Park>
      ))}
    </Container>
  );
};

export default Display;
