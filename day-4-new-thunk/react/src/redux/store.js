import { configureStore } from "@reduxjs/toolkit";

import { prodReducer } from "./productReducer/productSlice";
import { usersReducer } from "./userReducer/userAction";

export const store = configureStore ({

    reducer:{
        prod:prodReducer,
        users:usersReducer
      
    }
})