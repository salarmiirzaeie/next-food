"use client";
import React, { useEffect } from "react";

const Slider = () => {
  const [value, setValue] = React.useState(1);
  const values = [
    "smith",
    "john",
    "alex",
    "reznow",
    "adam",
    "joey",
    "mathew",
    "kevin",
    "travis",
    "joseph",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (value < 10) {
        setValue(value + 1);
      } else {
        setValue(1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <div>
      <div style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
        <p>{values[value]}</p>
      </div>
    </div>
  );
};

export default Slider;
