import {createSlice} from "@reduxjs/toolkit";


export const todo = createSlice({

    name: "todo",
    initialState:{ student: []},
    reducers:{
        addData : (state , action)=>{
            state.student.push(action.payload)
        },

        deletData: (state , action)=>{
            let data = state.student.filter((item)=>item.id != action.payload)
            state.student = data
        }
    }
})

export const {addData , deletData} = todo.actions
export default todo.reducer