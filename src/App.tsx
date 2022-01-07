import React, { useState } from "react";
import Display from "./components/Display";
import ICarpark from "./components/Interfaces/InterfaceCarpark";
import Modal from "./components/Modal";
import Search from "./components/Search";

// blank carpark
const initCarpark: ICarpark = {
  carpark_no: "",
  lot_type: "",
  lots_total: 0,
  lots_available: 0,
  address: "",
  free_parking: "",
  night_parking: "",
};

const App = () => {
  const [filteredCarparks, setFilteredCarparks] = useState<any[]>([]);
  const [carparkModal, setCarparkModal] = useState<ICarpark>(initCarpark);
  const [showModal, setShowModal] = useState(false);

  const displayModal = (carpark: ICarpark) => {
    setShowModal(true);
    setCarparkModal(carpark);
    // prevents scrolling
    document.body.style.overflow = "hidden";
  };

  const hideModal = () => {
    setShowModal(false);
    // re-enables scrolling
    document.body.style.overflow = "";
  };

  return (
    <div>
      {showModal && <Modal {...{ carparkModal, hideModal }}></Modal>}
      <h1 style={{ textAlign: "center" }}>peCar-Parker</h1>
      <Search {...{ setFilteredCarparks }} />
      <Display carparks={filteredCarparks} displayModal={displayModal} />
    </div>
  );
};

export default App;
