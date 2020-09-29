import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div style={{ display: "flex" }}>
      <button style={{ margin: "10px" }} type="button" onClick={decrement}>
        -
      </button>
      {count}
      <button style={{ margin: "10px" }} type="button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
