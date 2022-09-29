import React from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"

const Container = () => {
  const { yardsGiven, week, tdsGiven, gameSchedule, isLoading } = useSelector(
    (store) => store.stats
  )
  console.log(gameSchedule)
  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h3>Week {week} Games</h3>
      <section>
        {gameSchedule.map((game) => {
            const {GameKey, Week, Date, ForecastDescription, AwayTeam, HomeTeam} = game
          return (
            <div className='game' key={GameKey}>
              <h4>{AwayTeam} @ {HomeTeam}</h4>
            </div>
          )
        })}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  
  .game{
    display: flex;
    justify-content: flex-start;
    border: 2px solid black;
    padding: 10px 20px;
  }
`


export default Container