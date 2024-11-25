import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather defaultCity= "London"/>
    
      <footer>
        This project was coded by{""}
        <a href="https://github.com/" target="blank">
          {" "}
          Sheron Ndimande
        </a>
        {""} and is open sourced on{""}
        <a href="https://github.com/shaz93/react-weather" target="blank">
          {" "}
          Github
        </a>
      </footer>
    </div>
    </div>
  );
}
