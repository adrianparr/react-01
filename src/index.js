// https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/13559012?start=0

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Person name="Max" age="28" />
      <Person name="Manu" age="29" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
