import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./userSlice";

const usersSlice = createSlice({
    name :"users",
    initialState :{
        loading:false,
        error:false,
        users:null
    },
    reducers:{
        allUsers:(state,action) => {
            state.product = action.payload
        }
    },
    extraReducers,

})  

export const usersReducer = usersSlice.reducer
export const {allUsers} = usersSlice.actions