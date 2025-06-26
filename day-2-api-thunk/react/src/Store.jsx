import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reduxToolkit/counterToolkit/CounterSlice";
import { todoReducer } from "./reduxToolkit/todoToolkit/todoSlice";
import { moviesReducer } from "./reduxToolkit/movieToolkit/movieSlice";

const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer,
        movies:moviesReducer    
    }
})

export default store 