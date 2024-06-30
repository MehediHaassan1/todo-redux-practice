import { createSlice } from '@reduxjs/toolkit'

type TInitialState = {
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    isCompleted: boolean;
}

const initialState: TInitialState[] = []

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
})

// Action creators are generated for each case reducer function
export const { } = todoSlice.actions

export default todoSlice.reducer