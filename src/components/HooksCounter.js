import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex" }}>
      <button
        style={{ margin: "10px" }}
        type="button"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      {count}
      <button
        style={{ margin: "10px" }}
        type="button"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
