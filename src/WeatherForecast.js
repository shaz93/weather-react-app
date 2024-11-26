import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";


export default function WeatherForecast(){
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="01d"/>
                    <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">22°</span>
                        <span className="WeatherForecast-temperature-min">11°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}