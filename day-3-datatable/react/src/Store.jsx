import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./reduxToolkit/dataReducer/dataSlice";

export const store = configureStore({

    reducer:{
        data : dataReducer,
    }
})