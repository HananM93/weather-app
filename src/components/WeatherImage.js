import React from "react";
// you are getting a warning to add an alt property for your image tag, i went in and add one
const WeatherImage = ({img}) => {
    return (
        <img src={img} alt='weather icon' />
    )
}

export default WeatherImage