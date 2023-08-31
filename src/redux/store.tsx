import { configureStore } from "@reduxjs/toolkit"
import mathSlice from "./MathSlice"

export const store = configureStore({
    reducer: {
        math: mathSlice,
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>