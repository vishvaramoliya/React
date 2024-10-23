import { configureStore } from "@reduxjs/toolkit";
import BudgetSlice from "../features/Budgetslice";



export const store = configureStore({
    reducer:{
        BudgetKey: BudgetSlice
    }
})