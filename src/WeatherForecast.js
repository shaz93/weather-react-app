import React, {useState} from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                  <WeatherForecastDay data={forecast[0]}/>
                </div>
            </div>
        </div>
    );
}else {
    let apiKey = "50c2acd53349fabd54f52b93c8650d37";
    let longitude = props.coordinates.lon;
    let latitude =props.coordinates.lat;
    let apiUrl = `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt={cnt}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
}
}