import { createSlice } from "@reduxjs/toolkit";



export const counter = createSlice ({
    name : "counter" ,
    initialState : { count : 0},
    reducers : {
        increament : (state,action) =>{
            state.count += 1
        },
        decreament : (state , action) =>{
            state.count -= 1
        }

    }
})

export const {increament , decreament} = counter.actions

export default counter.reducer;