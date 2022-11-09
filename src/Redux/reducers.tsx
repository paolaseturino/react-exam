import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface SessionState {
    value: boolean
  }

const initialState: SessionState = {
    value: false,
  }

export const userSlice = createSlice({
    name: 'session',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      login: (state) => {
        state.value = true
      },
      logout: (state) => {
        state.value = false
      }
    },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer