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
  padding: 10px 10px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
  color: rgb(3, 3, 3);
  justify-content: center;
  font-size: .9rem;

  h3 {
    margin: 0;
  }
  .football{
    color: brown;
    filter: drop-shadow(1px 1px 1px rgba(0,0,0));
  }
  .logo {
    margin: 2px;
    transform: rotate(50deg);
  }
  .title {
    color: rgb(19,19,19);
    filter: drop-shadow(1px 1px 1px rgba(0,0,0, 0.7));

    margin: 0;
  }
  @media only screen and (min-width: 700px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px 10px;
    font-size: 1.5rem;
    h3 {
    }
    .logo {
      font-size: 1.75rem;
      margin-right: 6px;
    }
  }
`

export default Header
