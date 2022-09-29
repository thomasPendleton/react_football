import React, { useEffect } from "react"
import styled from "styled-components"
import Container from "./components/Container"
import Header from "./components/Header"
import { getGameSchedule } from "./features/stats/statsSlice"
import { useDispatch } from "react-redux"
function App() {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getGameSchedule())
  // }, [])

  return (
    <Wrapper>
      <Header />
      <Container />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default App
