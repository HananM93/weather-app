import React from "react";
import "./styles.css";
import weatherArray from "./weatherData";
import WeatherForecast from "./components/WeatherForecast"

console.log(weatherArray)

const data = weatherArray.map ((ele, index) => {
  return <WeatherForecast {...ele} key={index} />
})


export default function App() {
  return (
    <div className="App">
      <h1>My Weather Icons App</h1>
      <section>{data}</section>
      
    </div>
  );
}
