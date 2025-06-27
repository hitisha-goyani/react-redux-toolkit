import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reduxToolkit/counterToolkit/CounterSlice";
import { todoReducer } from "./reduxToolkit/todoToolkit/todoSlice";

const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer
    }
})

export default store 