import React, { useState } from "react";

const SynCounter = () => {
  const [count, setCount] = useState(0);

  //For Synchorous increment of count//
  const synincrement = () => {
    setCount((count) => count + 1);
  };
 
  const syndecrement = () => {
    if (count > 0){
    setCount((count) => count - 1);
  }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h2>This is SynCounter App</h2>
        <p style={{ fontSize: 50 }}>{count}</p>
        <button
          onClick={synincrement}
          style={{ fontsize: 30, marginRight: 10, padding: 10 }}
        >
          SynIncrement
        </button>
        <button
          onClick={syndecrement}
          style={{ fontsize: 30, marginRight: 10, padding: 10 }}
        >
          SynDecreme
        </button>
      </div>
    </div>
  );
};

export default SynCounter;
