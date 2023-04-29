import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: new Date().toString(),
                name: action.payload.task,
                isDone: false,
              };
              
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        },
        editTask: (state, action) => {
            const taskIndex = state.findIndex((task) => task.id === action.payload.id);
            if (taskIndex !== -1) {
              state[taskIndex].name = action.payload.name;
            }
          },
          completeTask: (state, action) => {
            const taskId = action.payload.id;
            const task = state.find((task) => task.id === taskId);
            if (task) {
              task.isDone = !task.isDone;
            }
          },
        
    }
});

export const {addTask, deleteTask,editTask,completeTask} = tasksSlice.actions;

export default tasksSlice.reducer;
