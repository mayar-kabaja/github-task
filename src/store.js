import { configureStore } from "@reduxjs/toolkit";
import { reposSlice, Users } from "./components";

export const store = configureStore({
    reducer :{
        Users,
        repose : reposSlice.reducer
    }
})