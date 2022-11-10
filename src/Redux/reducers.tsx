import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface SessionState {
    auth: boolean
  }

const initialState: SessionState = {
  auth: false,
  }

export const userSlice = createSlice({
    name: 'session',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: {
      auth: false
    },
    reducers: {
      login: (state) => {
        state.auth = true
      },
      logout: (state) => {
        state.auth = false
      }
    },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer