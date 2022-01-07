import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import { fetchCarparkAvailability } from "./Functions/Fetch";

const App = () => {
  const [filteredCarparks, setFilteredCarparks] = useState<any[]>([]);

  useEffect(() => {
    fetchCarparkAvailability("aljunied", setFilteredCarparks);
  }, []); // temporary, we will have to call fetchData with name that user has inputted.

  return (
    <div>
      <Display carparks={filteredCarparks} />
    </div>
  );
};

export default App;
