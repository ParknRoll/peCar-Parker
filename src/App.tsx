import React, { useEffect } from "react";
import "./App.css";
import { fetchAvailability } from "./Functions/Fetch";

const App = () => {
  useEffect(() => {
    fetchAvailability();
  }, []);

  return (
    <div className="App">
      <header className="App-header">test</header>
    </div>
  );
};

export default App;
