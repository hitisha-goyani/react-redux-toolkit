import { createSlice } from "@reduxjs/toolkit";

let state = {
    list:[],
    userList:[]
}

const movieSlice = createSlice({

    name:"movies",
    initialState:state,
    reducers:{
        allMovies:(state,action)=>{
            state.list = action.payload 
        },
        allUSers:(state,action)=>{
            state.userList = action.payload
        }
    }
})

export const moviesActions = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;