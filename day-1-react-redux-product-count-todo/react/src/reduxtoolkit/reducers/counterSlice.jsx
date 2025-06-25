import { createSlice } from "@reduxjs/toolkit";


let initialState = {count:0}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers : {
        incCount: (state, action) => {
                state.count++;
        },  

        decCount: (state, action) =>{
            state.count--;
        }
    }
})

export const {incCount, decCount} = counterSlice.actions
export const counterReducer = counterSlice.reducer