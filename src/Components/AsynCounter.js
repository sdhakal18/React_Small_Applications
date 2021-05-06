import React, { useState } from "react";

const incrementPeriod = 1000; // in millisecond
const decrementPeriod = 1000; // in millisecond

const AsynCounter = () => {
    const [count, setCount] = useState(0);

    //To increment the count after one sec//

  const incrementAsync = () => {
    setTimeout(() => {
      setCount((count) => count + Math.floor(Math.random() * 10));
    }, incrementPeriod);
  };

  const decrementAsync = () => {
    setTimeout(() => {
      if (count>0){
        setCount((count) => count - Math.floor(Math.random() * 10));
      }
    }, decrementPeriod);
  };

  return(
    <div>
        <h2>This is AsynCounter App</h2>
        <p style={{ fontSize: 50 }}>{count}</p>
      <div>
        <button
          onClick={incrementAsync}
          style={{
            fontsize: 30,
            marginRight: 10,
            padding: 10,
            marginTop: 10,
          }}
        >
          Async Increment
        </button>
        <button
          onClick={decrementAsync}
          style={{
            fontsize: 30,
            marginRight: 10,
            padding: 10,
            marginTop: 10,
          }}
        >
          Async Decrement
        </button>
      </div>
  </div>
);
};

  
export default AsynCounter;