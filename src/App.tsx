import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import ICarpark from "./components/Interfaces/InterfaceCarpark";
import { fetchCarparks } from "./Functions/Fetch";

const App = () => {
  const [carparks, setCarparks] = useState<ICarpark[]>([]);
  useEffect(() => fetchCarparks("ALJUNIED", setCarparks), []); // temporary, we will have to call fetchData with name that user has inputted.

  return (
    <div>
      <Display carparks={carparks} />
    </div>
  );
};

export default App;
