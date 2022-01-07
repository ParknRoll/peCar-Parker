/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1%;
  margin: 0% 10%;
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
        <Header style={{ flex: 3 }}>Address</Header>
        <Header>Lots Available</Header>
      </Park>
      {props.carparks.length === 0 ? (
        <Park>
          <p>No Results Found!</p>
        </Park>
      ) : (
        props.carparks.map((carpark) => (
          <Park key={carpark.carpark_no}>
            <Info style={{ flex: 3 }}>{carpark.address}</Info>
            <Info>{`${carpark.lots_available} / ${carpark.lots_total}`}</Info>
          </Park>
        ))
      )}
    </Container>
  );
};

export default Display;
