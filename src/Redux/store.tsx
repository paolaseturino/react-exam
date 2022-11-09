import { configureStore  } from "@reduxjs/toolkit"
import { userSlice } from './reducers'


 const store = configureStore({
    reducer: {
        session: userSlice.reducer
    }
 })

 
export default store