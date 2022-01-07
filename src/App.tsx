import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import ICarpark from "./components/Interfaces/InterfaceCarpark";
import { fetchCarparkAvailability, fetchCarparks } from "./Functions/Fetch";

const App = () => {
  const [filteredCarparks, setFilteredCarparks] = useState<any[]>([]);

  useEffect(() => {
    fetchCarparkAvailability("aljunied", setFilteredCarparks);
  }, []); // temporary, we will have to call fetchData with name that user has inputted.

  return (
    <div className="App">
      <header className="App-header">test</header>
      <Display carparks={filteredCarparks} />;
    </div>
  );
};

export default App;
