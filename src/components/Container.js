import React, { useState } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import Teams from "./Teams"
import WeekHeader from "./WeekHeader"
import WeatherIcon from "./WeatherIcon"
import { TiWeatherWindy } from "react-icons/ti"
import { London, Cincinnati, Tampa } from "../stadium/"

const stadium = {
  London,
  Cincinnati,
  "Tampa Bay": Tampa,
}

const Container = () => {
  const { week, gameSchedule, isLoading } = useSelector((store) => store.stats)
  //   console.log(gameSchedule);

  const date = new Date("2022-10-02T13:00:00")
  console.log(date.toDateString())

  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <WeekHeader week={week} />

      <section>
        {gameSchedule.map((game) => {
          const {
            GameKey,
            ForecastWindSpeed,
            Date: DateCode,
            ForecastDescription,
            StadiumDetails,
            ForecastTempLow,
            ForecastTempHigh,
          } = game
          const { Type, City, PlayingSurface } = StadiumDetails
          //   console.log(City)
          return (
            <div
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
                  url(${stadium[City]})`,
                backgroundPosition: `center`,
              }}
              className="game"
              key={GameKey}
            >
              <Teams {...game} />

              <div className="weather">
                <p>{ForecastDescription}</p>
                <p>Wind speed: {ForecastWindSpeed} mph</p>
                <p>
                  Low: {ForecastTempLow}F High: {ForecastTempHigh}F
                </p>
                {ForecastWindSpeed > 14 && (
                  <TiWeatherWindy
                    style={{ fontSize: "2.5rem", color: "lightgray" }}
                  />
                )}
              </div>
              <div className="icon">
                <h5>{DateCode}</h5>
                <WeatherIcon
                  forecastDescription={ForecastDescription}
                  city={City}
                />
              </div>
            </div>
          )
        })}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 95%;

  .game {
    color: white;
    display: grid;
    border-radius: 5px;
    grid-template-columns: 1fr 1fr 30%;
    border: 2px solid black;
    padding: 10px 10px;
    margin: 10px auto;
  }
  .weather {
    margin: 0 5px;
    text-align: center;
    /* padding: 5px 20px; */
  }
  .icon {
    text-align: center;
  }
  @media only screen and (min-width: 600px) {
    max-width: 700px;
    .game {
      padding: 15px 20px;
    }
  }
`

export default Container
