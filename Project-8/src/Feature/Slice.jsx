import { createSlice } from "@reduxjs/toolkit";


export const todo = createSlice({

    name: "todo",
    initialState: { taskData: [] },
    reducers: {
        addData: (state, action) => {
            state.taskData.push(action.payload)
        },
        deleteData: (state, action) => {
            let data = state.taskData.filter((e) => e.id != action.payload)
            state.taskData = data
        },

        toggleCompleted: (state, action) => {
            const existingData = state.taskData.find((item) => item.id === action.payload);
            if (existingData) {
              existingData.completed = !existingData.completed;
      }
      },
        update: (state, action) => {
            state.taskData.map((e, i)=>{
                if(e.id == action.payload.id){
                    e.task = action.payload.task
                    e.priority = action.payload.priority
                    e.hobbies = action.payload.hobbies
                }
                else{
                    e
                }
            })
        }
    }
});

export const { addData, deleteData , update , toggleCompleted } = todo.actions;
export default todo.reducer;