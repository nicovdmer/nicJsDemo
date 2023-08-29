import React from "react";

export const MyButton = ({ children }) => {
  return (
    <button
      className="my-button"
      style={{ backgroundColor: "white", color: "red" }}
    >
      {children}
    </button>
  );
};
