import React from "react"
import styled from "styled-components"
import {
  Cardinals,
  Raiders,
  Seahawks,
  Broncos,
  Cowboys,
  Chiefs,
  Titans,
  Packers,
  Chargers,
  Redskins,
  Jaguars,
  Patriots,
  Jets,
  Ravens,
  Lions,
  Texans,
  Colts,
  Giants,
  Eagles,
  SF,
  Bears,
  Steelers,
  Dolphins,
  Bengals,
  Vikings,
  Bucs,
  Saints,
  Bills,
  Rams,
  Falcons,
  Browns,
  Panthers,
} from "../assets"

const teamIcons = {
  ARI: Cardinals,
  MIA: Dolphins,
  MIN: Vikings,
  CLE: Browns,
  BUF: Bills,
  WAS: Redskins,
  SEA: Seahawks,
  LAC: Chargers,
  TEN: Titans,
  CHI: Bears,
  JAX: Jaguars,
  NYJ: Jets,
  NE: Patriots,
  DEN: Broncos,
  KC: Chiefs,
  LAR: Rams,
  CIN: Bengals,
  NO: Saints,
  ATL: Falcons,
  BAL: Ravens,
  DAL: Cowboys,
  DET: Lions,
  HOU: Texans,
  IND: Colts,
  NYG: Giants,
  PHI: Eagles,
  PIT: Steelers,
  CAR: Panthers,
  GB: Packers,
  LV: Raiders,
  TB: Bucs,
  SF: SF,
}

const Teams = ({ AwayTeam, HomeTeam, StadiumDetails, Day }) => {
  const { Type, City, PlayingSurface, State, Country } = StadiumDetails

  return (
    <Wrapper>
      <div className="icon-container">
        <img src={teamIcons[AwayTeam]} alt={AwayTeam} className="icon" />
        <img src={teamIcons[HomeTeam]} alt={HomeTeam} className="icon" />
      </div>
      <div className="team-abbv-container">
        <h4>{AwayTeam} </h4>
        <h4>@</h4>
        <h4>{HomeTeam}</h4>
      </div>
      <a
        className="weather-link"
        target="_blank"
        rel="noreferrer"
        href={`https://www.google.com/search?q=${City}+${
          State ? State : Country
        }+weather`}
      >
        <h4>{City}</h4>
      </a>
      <h4>
        {Type === "RetractableDome" ? "Retractable Dome" : Type},{" "}
        {PlayingSurface === null ? "unknown" : PlayingSurface}
      </h4>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .weather-link {
    text-decoration: none;
    color: white;
  }
  .icon-container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .icon {
      margin: auto;
      max-height: 40px;
      max-width: 60px;
      filter: drop-shadow(1px 1px 1px rgb(3, 3, 3));
    }
  }
  .team-abbv-container {
    display: grid;
    grid-template-columns: 1fr 13px 1fr;
    h4 {
      margin-top: 5px;
    }
  }

  h4 {
    margin: 10px auto;
    text-align: center;
  }
  @media only screen and (min-width: 600px) {
    .icon-container {
      .icon {
        margin: auto;
        max-height: 70px;
        max-width: 80px;
      }
    }
  }
`

export default Teams
