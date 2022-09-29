import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { gameData } from "../../gameData"
// temp file to store data, limits api calls during development

const key = "48299a08a8e9437aa2f0bfa8bf85c76c"
//scores per season
const url = "https://api.sportsdata.io/v3/nfl/scores/json/Scores/2022?key="


export const getGameSchedule = createAsyncThunk("schedule/getSchedule", () => {
    console.log('fetching');
    return fetch(url + key)
    .then((response) => response.json())
    .catch((err) => console.log(err))
})

const initialState = {
  gameSchedule: gameData,
  yardsGiven: 0,
  tdsGiven: 0,
  isLoading: false,
  week: 4,
}

export const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    clearItem: (state) => {
      state.yardsGiven = 0
    },
  },
  extraReducers: {
    [getGameSchedule.pending]: (state) => {
      state.isLoading = true
    },
    [getGameSchedule.fulfilled]: (state, action) => {
      console.log(action)
      const currentWeekGames = action.payload.filter((game) => {
        return game.Week === state.week
      })
      state.gameSchedule = currentWeekGames
      state.isLoading = false
    },
    [getGameSchedule.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

// console.log(statsSlice)

export const { clearItem } = statsSlice.actions
export default statsSlice.reducer
