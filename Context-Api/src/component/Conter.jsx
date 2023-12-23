import React, { useReducer } from "react";

const initial = 0;
const reducer = (state, action) => {
  switch (action) {
    case "+":
      return state + 1;
    case "-":
      return state - 1;
    default:
      return state;
  }
};

const Conter = () => {
  const [count, dispacth] = useReducer(reducer, initial);
  return (
    <div className="text-center">
      <h1>{count}</h1>
      <div className="d-flex">
        <button className="btn btn-success" onClick={() => dispacth("+")}>
          +
        </button>
        <button className="btn btn-danger" onClick={() => dispacth("-")}>
          -
        </button>
      </div>
    </div>
  );
};

export default Conter;
