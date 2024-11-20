import React, { useState, useEffect } from "react";

function IntervalExample() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>React setInterval Example : Displaying current time</h3>
      <p>Current Time : {time}</p>
    </div>
  );
}

export default IntervalExample;
