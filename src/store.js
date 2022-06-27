import { configureStore } from "@reduxjs/toolkit";
import { Users } from "./components";

export const store = configureStore({
    reducer :{
        Users
    }
})