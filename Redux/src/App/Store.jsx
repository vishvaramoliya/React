import { configureStore } from "@reduxjs/toolkit";
import  counter  from "../Feature/Slice";


export const store = configureStore ({
    reducer : {
        counterKey : counter
    }
})