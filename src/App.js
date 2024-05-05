import React from "react";
import "./App.css";
import PhoneComparison from "./phone_compare/PhoneComparison";
import data from "./phone_compare/data";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Telefon Karşılaştırma
      </h1>
      <PhoneComparison phones={data} />
    </div>
  );
}

export default App;
