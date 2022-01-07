import React, { useState } from "react";
import Display from "./components/Display";
import Search from "./components/Search";

const App = () => {
  const [filteredCarparks, setFilteredCarparks] = useState<any[]>([]);

  return (
    <div>
      <Search {...{ setFilteredCarparks }} />
      <Display carparks={filteredCarparks} />
    </div>
  );
};

export default App;
