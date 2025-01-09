import React, { useState } from "react";
import "./App.css";

function App() {
  
  const [color, setColor] = useState("");

  
  const handleInputChange = (e) => setColor(e.target.value);

  return (
    <div className="App" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Color Changer App</h1>
      <input
        type="text"
        placeholder="Enter a color or hex code"
        value={color}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "250px",
          marginBottom: "20px",
        }}
      />
      <div
        style={{
          margin: "20px auto",
          width: "300px",
          height: "150px",
          backgroundColor: color || "white",
          border: "1px solid #ccc",
          transition: "background-color 0.3s ease",
        }}
      >
        <p style={{ paddingTop: "60px" }}>
          {color ? `Color: ${color}` : "Enter a color to see the result"}
        </p>
      </div>
    </div>
  );
}

export default App;
