import React from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { changeWeek } from "../features/stats/statsSlice"

const WeekHeader = ({ week }) => {
    const dispatch = useDispatch()
  return (
    <Wrapper>
      <h3>Week {week} Games</h3>
      <select value={week} name="week" id="week" onChange={(e) => dispatch(changeWeek(e.target.value))}>
        {/* <option value="1">Select a week</option> */}
        <option value="1">week 1</option>
        <option value="2">week 2</option>
        <option value="3">week 3</option>
        <option value="4">week 4</option>
        <option value="5">week 5</option>
        <option value="6">week 6</option>
        <option value="7">week 7</option>
        <option value="8">week 8</option>
        <option value="9">week 9</option>
        <option value="10">week 10</option>
        <option value="11">week 11</option>
        <option value="12">week 12</option>
        <option value="13">week 13</option>
        <option value="14">week 14</option>
        <option value="15">week 15</option>
        <option value="16">week 16</option>
        <option value="17">week 17</option>
      </select>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  select {
    outline: none;
    text-transform: capitalize;
    height: 30px;
    width: 140px;
    border-radius: 4px;
    cursor: pointer;
    background: #292929;
    color: #fff;
    font-size: 16px;
    padding: 0 5px;
  }
`

export default WeekHeader
