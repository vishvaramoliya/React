import {  createAction, createSlice } from "@reduxjs/toolkit";

export const addExp = createAction('BudgetSlice/addExp')
export const delExp = createAction('BudgetSlice/delExp')
export const BudgetSlice = createSlice({
    name: "BudgetSlice",
    initialState: { Data: 0 },
    reducers: {
        addBudget: (state, action) => {
            state.Data += action.payload;
        }
    },
    extraReducers: (builder => {
        builder.addCase(addExp, (state, action) => {
            state.Data -= action.payload
        })
        builder.addCase(delExp , (state , action)=>{
            state.Data += action.payload
        })
    })

})

export const { addBudget } = BudgetSlice.actions
export default BudgetSlice.reducer