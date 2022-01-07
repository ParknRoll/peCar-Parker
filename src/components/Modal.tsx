import ICarpark from "./Interfaces/InterfaceCarpark";
import styled from "styled-components";
import { Close } from "@material-ui/icons";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
`;

const FocusedCarpark = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 85%;
  padding: 1.5%;
  background-color: rgba(255, 255, 255);
`;

const Title = styled.h1`
  margin: 1rem;
`;

const Para = styled.p`
  margin: 1rem;
`;

const Modal = ({
  carparkModal,
  hideModal,
}: {
  carparkModal: ICarpark;
  hideModal: () => void;
}) => {
  console.log(carparkModal);
  return (
    <ModalContainer>
      <FocusedCarpark>
        <Close
          style={{
            alignSelf: "flex-end",
            transform: "scale(1.5)",
            cursor: "pointer",
          }}
          onClick={hideModal}
        />
        <Title className="m-3">{carparkModal.address}</Title>
        <Para>
          Lots Available:{" "}
          {`${carparkModal.lots_available} / ${carparkModal.lots_total}`}
        </Para>
        <Para>Free parking: {carparkModal.free_parking}</Para>
        <Para>Night parking: {carparkModal.night_parking}</Para>
        <Para>Carpark code: {carparkModal.carpark_no}</Para>
      </FocusedCarpark>
    </ModalContainer>
  );
};

export default Modal;
