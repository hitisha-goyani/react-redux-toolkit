import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterSlice";
import { todoReducer } from "./reducers/toSlice";


const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer

    }
})
    
export default store