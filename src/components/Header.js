import React from "react"
import styled from "styled-components"
import { IoMdAmericanFootball } from "react-icons/io"


const Header = () => {
  return (
    <Wrapper>
      <div className="logo">
        <IoMdAmericanFootball />
      </div>
      <div className="title">
        <h3>FootBall Schedule and Weather Tracker</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  gap: 10px;
  background-color: #85c742;
  padding: 20px 10px;
  h3 {
    margin: 0;
    font-size: 1rem;
  }
  .logo {
    margin: auto 0;
    transform: rotate(30deg);
  }
  @media only screen and (min-width: 600px) {
    h3 {
      font-size: 2rem;
    }
  }
`

export default Header
