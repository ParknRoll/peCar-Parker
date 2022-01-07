import React, { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import { fetchAvailability, fetchInformation } from "./Functions/Fetch";

const App = () => {
  const [state, setstate] = useState(fetchAvailability());

  const updateState = () => setstate(fetchAvailability());

  useEffect(() => {
    const internal = setInterval(updateState, 60000);
    return () => {
      clearInterval(internal);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">test</header>
      <Display carpark={state} />
    </div>
  );
};

export default App;
