import React from "react"
import styled from "styled-components"
import { IoMdAmericanFootball } from "react-icons/io"


const Header = () => {
  return (
    <Wrapper>
      <div className="logo">
        <IoMdAmericanFootball className="football" />
      </div>
      <div className="title">
        <h3>FootBall Schedule and Weather Tracker</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  background-color: #85c742;
  padding: 0px 10px;
  border-radius: 0 0 5px 5px;
  h3 {
    margin: 0;
    font-size: 1rem;
  }
  .logo {
    margin: 2px;
    transform: rotate(50deg);
  }
  .title {
    margin: 0;
  }
  @media only screen and (min-width: 600px) {
    h3 {
      font-size: 2rem;
    }
    .logo {
      font-size: 2rem;
      margin-right: 6px;
    }
  }
`

export default Header
