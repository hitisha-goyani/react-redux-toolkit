import { createSlice, nanoid } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addTodo : (state, action)=>{
            let obj = {
                id:nanoid(),
                todo:action.payload
            }
            state.push(obj)
        }
    }
})

export const todoActions = todoSlice.actions
export const todoReducer = todoSlice.reducer