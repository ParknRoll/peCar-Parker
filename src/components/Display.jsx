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
        <Park key={carpark.carpark_no}>
          <Info>{carpark.carpark_no}</Info>
          <Info>{carpark.lot_type}</Info>
          <Info>{carpark.lots_total}</Info>
          <Info>{carpark.lots_available}</Info>
          <Info>{carpark.address}</Info>
          <Info>{carpark.free_parking}</Info>
          <Info>{carpark.night_parking}</Info>
        </Park>
      ))}
    </Container>
  );
};

export default Display;
