import ICarpark from "./Interfaces/InterfaceCarpark";
import ISearch from "./Interfaces/InterfaceSearch";
import Carpark from "./Carpark";
import { useEffect, useState } from "react";

const DisplaySearch = (carparks: ICarpark[]) => {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Search Results</h1>
    </div>
  );
};

export default DisplaySearch;
