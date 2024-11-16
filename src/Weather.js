import React from "react";


export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <input type="search"placeholder="Enter a city..."className="form-control"/>
                <input  type="submit"value="search"/>
            </form>
            <h1>New York</h1>
            <ul>
                <li>
                    Wednesday 7:00
                </li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"alt="Mostly Cloudy "/>
                    6°C
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
    )
}