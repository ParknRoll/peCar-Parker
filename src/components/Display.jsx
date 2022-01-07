/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1%;
  margin: 0% 5%;
`;

const Park = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1%;
`;

const Header = styled.div`
  flex: 1;
  font-weight: 700;
  padding: 0.5%;
`;

const Info = styled.div`
  flex: 1;
  padding: 0.5%;
`;

const Display = (props) => {
  return (
    <Container>
      <Park>
        <Header>Code</Header>
        <Header>Available Lot</Header>
        <Header>Total Lot</Header>
        <Header style={{ flex: 3 }}>Address</Header>
        <Header style={{ flex: 3 }}>Free Parking</Header>
        <Header>Night Parking</Header>
      </Park>
      {props.carparks.map((carpark) => (
        <Park key={carpark.carpark_no}>
          <Info>{carpark.carpark_no}</Info>
          <Info>{carpark.lots_available}</Info>
          <Info>{carpark.lots_total}</Info>
          <Info style={{ flex: 3 }}>{carpark.address}</Info>
          <Info style={{ flex: 3 }}>{carpark.free_parking}</Info>
          <Info>{carpark.night_parking}</Info>
        </Park>
      ))}
    </Container>
  );
};

export default Display;
