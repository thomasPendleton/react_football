import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { gameData } from "../../gameData"
// temp file to store data, limits api calls during development

const key = "48299a08a8e9437aa2f0bfa8bf85c76c"
//scores per season
const url = "https://api.sportsdata.io/v3/nfl/scores/json/Scores/2022?key="


export const getGameSchedule = createAsyncThunk("schedule/getSchedule", () => {
  return fetch(url + key)
    .then((response) => response.json())
    .catch((err) => console.log(err))
})

export const getCurrentWeek = createAsyncThunk("week/currentWeek", () => {
  return fetch(
    `https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=${key}`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error))
})

const initialState = {
  gameSchedule: [],
  filteredSchedule: [],
  isLoading: false,
  week: 1,
}

export const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    changeWeek: (state, action) => {
      state.week = +action.payload
      state.filteredSchedule = state.gameSchedule.filter(game => {
        return game.Week === state.week
      })
    },
  },
  extraReducers: {
    [getGameSchedule.pending]: (state) => {
      state.isLoading = true
    },
    [getGameSchedule.fulfilled]: (state, action) => {
      state.gameSchedule = action.payload
      state.filteredSchedule = state.gameSchedule.filter(game => game.Week === state.week)
      state.isLoading = false
    },
    [getGameSchedule.rejected]: (state) => {
      state.isLoading = false
    },
    [getCurrentWeek.pending]: (state) => {
      state.isLoading = true
    },
    [getCurrentWeek.fulfilled]: (state, action) => {
      state.week = action.payload
      state.isLoading = false
    },
    [getCurrentWeek.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

// console.log(statsSlice)

export const { clearItem, changeWeek } = statsSlice.actions
export default statsSlice.reducer
