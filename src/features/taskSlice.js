import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTaskToStore: (state, actions) => {
      const newTask = {
        id: nanoid(),
        heading: actions.payload.heading,
        description: actions.payload.description,
        addedOn: new Date().toString(),
        status: "Pending",
      };
      state.tasks.push(newTask);
    },
    updateTaskOnStore: (state, actions) => {
      const task = state.tasks.find((task) => task.id === actions.payload.id);
      task.heading = actions.payload.heading;
      task.description = actions.payload.description;
    },
    toggleStatusOnStore: (state, actions) => {
      const task = state.tasks.find((task) => task.id === actions.payload.id);
      task.status = task.status === "Pending" ? "Completed" : "Pending";
    },
    deleteTaskFromStore: (state, actions) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== actions.payload.id
      );
    },
  },
});

export const {
  addTaskToStore,
  updateTaskOnStore,
  toggleStatusOnStore,
  deleteTaskFromStore,
} = taskSlice.actions;

export default taskSlice.reducer;
