import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo (props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix d-flex">
                <div className="float-left">
                <WeatherIcon code={props.data.icon} alt={props.data.description}/>
              </div>
              <div className="float-right">
             <WeatherTemperature celcius={props.data.temperature}/>
            </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:15%</li>
              <li>Humidity:{props.data.humidity}%</li>
              <li>Wind:{props.data.wind}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    
    
    );
}