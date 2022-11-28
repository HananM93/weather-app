import React from "react";

const WeatherInfo = ({conditions, time}) => {
    return (
        <div>
            <h5>{conditions}</h5>
            <p>{time}</p>
        </div>
    )
}

export default WeatherInfo