import React from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import Teams from "./Teams"
import WeekHeader from "./WeekHeader"
import WeatherIcon from "./WeatherIcon"
import { TiWeatherWindy } from "react-icons/ti"
import {
  London,
  Jets,
  Cleveland,
  Baltimore,
  Cincinnati,
  Glendale,
  Tampa,
  InglewoodRams,
  InglewoodChargers,
  Atlanta,
  Charlotte,
  Chicago,
  Saints,
  Pittsburgh,
  Buffalo,
  Philadelphia,
  Sanfran,
  Detroit,
  Chiefs,
  Arlington,
  Denver,
  Raiders,
  Packers,
  Jacksonville,
  Houston,
  Dolphins,
  Minneapolis,
  Nashville,
  Seattle,
  Landover,
  Indianapolis,
  Foxborough,
  Giants,
  Munich,
  Mexico,
} from "../stadium/"

const stadium = {
  London,
  Munich,
  // Mexico Estadio azteca
  "Mexico City": Mexico,
  CIN: Cincinnati,
  TB: Tampa,
  LAR: InglewoodRams,
  LAC: InglewoodChargers,
  ATL: Atlanta,
  CAR: Charlotte,
  CHI: Chicago,
  ARI: Glendale,
  NYJ: Jets,
  BAL: Baltimore,
  CLE: Cleveland,
  NO: Saints,
  PIT: Pittsburgh,
  BUF: Buffalo,
  PHI: Philadelphia,
  SF: Sanfran,
  DET: Detroit,
  KC: Chiefs,
  DAL: Arlington,
  DEN: Denver,
  LV: Raiders,
  GB: Packers,
  JAX: Jacksonville,
  HOU: Houston,
  MIA: Dolphins,
  MIN: Minneapolis,
  TEN: Nashville,
  SEA: Seattle,
  WAS: Landover,
  IND: Indianapolis,
  NE: Foxborough,
  NYG: Giants,
}

const Container = () => {
  const { week, gameSchedule, isLoading, filteredSchedule } = useSelector(
    (store) => store.stats
  )

  if (isLoading) {
    return (
      <Wrapper className="loading">
        <h1>Loading...</h1>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <WeekHeader week={week} />

      <section>
        {filteredSchedule.map((game) => {
          const {
            GameKey,
            ForecastWindSpeed,
            Date: DateCode,
            ForecastDescription,
            StadiumDetails,
            ForecastTempLow,
            ForecastTempHigh,
            HomeTeam,
          } = game
          const { Type, City, PlayingSurface } = StadiumDetails
          let date = new Date(DateCode).toDateString()

          return (
            <div
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
                  url(${
                    City === "London"
                      ? stadium[City]
                      : City === "Munich"
                      ? stadium[City]
                      : City === "Mexico City"
                      ? stadium[City]
                      : stadium[HomeTeam]
                  })`,
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
                <h4>{date}</h4>
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
    transition: transform .3s linear;
    &:hover {
      transform: scale(119%);
    }
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
