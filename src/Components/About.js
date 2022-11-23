import React from "react";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "../Redux/Actions";
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (count) => dispatch(incrementCounter(count)),
    decrement: (count) => dispatch(decrementCounter(count)),
  };
};
const About = (props) => {
  return (
    <div>
      <h2>About</h2>
      <p>{props.counter}</p>
      <button onClick={() => props.increment(props.count)}>+</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
