import { configureStore } from "@reduxjs/toolkit";
import  todo  from "../Feature/Todoslice";

export const store = configureStore({
    reducer: {
        todoKey : todo
   }
});