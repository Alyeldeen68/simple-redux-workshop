import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "./Redux/Actions";

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
function App(props) {
  return (
    <div className="App">
      <div>
        <button onClick={() => props.decrement(props.count)}>-</button>
        <p>{props.counter}</p>
        <button onClick={() => props.increment(props.count)}>+</button>
      </div>
      <About />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
