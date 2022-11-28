import React from "react";
import WeatherImage from "./WeatherImage"
import WeatherInfo from "./WeatherInfo"

const WeatherForecast = (props) => {
    return (
        <div>
            <WeatherImage img={props.img}/>
            <WeatherInfo{...props}/>
        </div>
    )
}

export default WeatherForecast