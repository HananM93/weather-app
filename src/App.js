import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast"

console.log(weatherData)

const data = weatherData.map ((ele, index) => {
  return <WeatherForecast {...ele} key={index} />
})

console.log(data)

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      {data}
    </div>
  );
}
