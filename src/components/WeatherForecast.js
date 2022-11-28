import React from "react";
import WeatherImage from "./WeatherImage"
import WeatherConditions from "./WeatherData"

const WeatherForecast = () => {
    return (
        <div>
            <WeatherImage />
            <WeatherConditions />
        </div>
    )
}

export default WeatherForecast