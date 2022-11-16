import React from "react"
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherWindy,
  TiWeatherPartlySunny,
} from "react-icons/ti"
import styled from "styled-components"

const WeatherIcon = ({ forecastDescription, city }) => {
    console.log(city, forecastDescription)
    if (forecastDescription === null) {
      return console.log("null")
    }
    if (forecastDescription === "Scattered Clouds") {
      return (
        <Wrapper>
          <TiWeatherCloudy className="icon" />
        </Wrapper>
      )
    }
    if (
      forecastDescription === "Heavy Intensity Rain" ||
      forecastDescription === "Moderate Rain"
    ) {
      return (
        <Wrapper>
          <TiWeatherDownpour style={{ color: "#0066b2" }} className="icon" />
        </Wrapper>
      )
    }
    if (
      forecastDescription === "Clear Sky" ||
      forecastDescription === "Few Clouds"
    ) {
      return (
        <Wrapper>
          <TiWeatherSunny style={{ color: "yellow" }} className="icon" />
        </Wrapper>
      )
    }
    if (forecastDescription === "Broken Clouds") {
      return (
        <Wrapper>
          <TiWeatherPartlySunny
            style={{ color: "lightGray" }}
            className="icon"
          />
        </Wrapper>
      )
    }
    if (forecastDescription === "Light Rain") {
      return (
        <Wrapper>
          <TiWeatherShower style={{ color: "lightBlue" }} className="icon" />
        </Wrapper>
      )
    }
    if (forecastDescription === "Overcast Clouds") {
      return (
        <Wrapper>
          <TiWeatherCloudy className="icon" />
        </Wrapper>
      )
    }
    if (forecastDescription.includes("Snow")) {
      return (
        <Wrapper>
          <TiWeatherSnow className="icon" />
        </Wrapper>
      )
    }
}

const Wrapper = styled.div`
  .icon {
    font-size: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 10px;
  }
`

export default WeatherIcon
