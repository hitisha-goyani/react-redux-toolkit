import { configureStore } from "@reduxjs/toolkit";
import { dummyApi } from "./dummyApi";

export const store = configureStore({
    reducer:{
    
        [dummyApi.reducerPath]:dummyApi.reducer
    },
    middleware:(gt) => gt().concat(dummyApi.middleware)
})