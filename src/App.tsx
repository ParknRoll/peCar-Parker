import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  const fetchData = () => {
    return fetch("https://api.data.gov.sg/v1/transport/carpark-availability")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">test</header>
    </div>
  );
};

export default App;
