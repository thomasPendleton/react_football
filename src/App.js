import React, { useEffect } from "react"
import styled from "styled-components"
import Container from "./components/Container"
import Header from "./components/Header"
import { getGameSchedule, getCurrentWeek } from "./features/stats/statsSlice"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const { week } = useSelector((store) => store.stats)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentWeek())
    dispatch(getGameSchedule())
  }, [])

  return (
    <Wrapper>
      <Header />
      <Container />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #bdd9c921;
  height: 100vh;
`

export default App
