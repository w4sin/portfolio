import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "./store"
import { MathData } from '../components/CustomMath/MathInterface'
import defaultData from '../components/CustomMath/DefaultData';

export interface MathState {
    data: MathData[]
    title: string
    choose: number;
}

export interface ValueItem {
    mathIndex: number;
    current?: number;
    value?: number;
    show?: number;
}

const initialState: MathState = { data: defaultData, title: defaultData[0].title, choose: 0, }

export const mathSlice = createSlice({
    name: 'math',
    initialState,
    reducers: {
        setDefault: (state) => {
            state.data = [...defaultData]
            reset(state)
        },
        deleteData: (state, action: PayloadAction<string>) => {
            const deleteTitle = action.payload
            state.data = state.data.filter(({ title }) => title != deleteTitle)
            reset(state)
        },
        setTitle: (state, action: PayloadAction<string>) => {
            const newTitle = action.payload
            state.title = newTitle
            state.choose = state.data.findIndex(({ title }) => newTitle == title)
        },
        //********mathChoose function*********
        setCurrentSelect: (state, action: PayloadAction<ValueItem>) => {
            const value = action.payload
            const mathChoose = state.data[state.choose].math[value.mathIndex]
            if ("curSelect" in mathChoose) {
                mathChoose.curSelect = value.current ? value.current : 0
                if (mathChoose.onFormula) {
                    const formula = mathChoose.select[mathChoose.curSelect].formula
                    state.data[state.choose].formula = formula ? formula : ""
                }
            }
        },
        setCurrentInput: (state, action: PayloadAction<ValueItem>) => {
            const value = action.payload
            const mathChoose = state.data[state.choose].math[value.mathIndex]
            if ("value" in mathChoose) {
                mathChoose.value = value.value ? value.value : 0
                mathChoose.show = value.show ? value.show : 0
            }
        }
    },
})

function reset(state: MathState) {
    const data = state.data[0]
    state.title = data ? data.title : ""
    state.choose = 0
}

export const { setDefault, deleteData, setTitle, setCurrentSelect, setCurrentInput } = mathSlice.actions

export const selectMath = (state: RootState) => state.math

export default mathSlice.reducer