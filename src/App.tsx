import React, { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import ICarpark from "./components/Interfaces/InterfaceCarpark";
import { fetchCarparks } from "./Functions/Fetch";

const App = () => {
  const [carparks, setCarparks] = useState<ICarpark[]>([]);
  useEffect(() => fetchCarparks("ALJUNIED", setCarparks), []); // temporary, we will have to call fetchData with name that user has inputted.
  return (
    <div className="App">
      <header className="App-header">test</header>
      {carparks.map((carpark, index) => {
        <Display key={index} carpark={carpark} />;
      })}
    </div>
  );
};

export default App;
