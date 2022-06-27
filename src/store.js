import { configureStore } from "@reduxjs/toolkit";
import { pullsSlice, reposSlice, Users } from "./components";

export const store = configureStore({
    reducer :{
        Users,
        repose : reposSlice.reducer,
        pulls : pullsSlice.reducer,
    }
})