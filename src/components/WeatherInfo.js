import React from "react";

const WeatherInfo = ({conditions, time}) => {
    return (
        <div>
          <h6>
            <span>Conditions:</span>
            {conditions}
        
          <p>
            <span>Time:</span>
            {time}
            </p>
            </h6>
        </div>
      );
    };

export default WeatherInfo