import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-control"
          autoFocus="on"
        />
        <input type="submit" value="search" />
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Mostly Cloudy "
            className="float-left"
          />
          <span className="temperature">6</span>
          <span className="unit">°C </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:72</li>
            <li>Wind:13km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
