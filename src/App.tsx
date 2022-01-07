import React, { useEffect, useState } from "react";
import "./App.css";
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

  fetchInformation();

  return (
    <div className="App">
      <header className="App-header">test</header>
    </div>
  );
};

export default App;
