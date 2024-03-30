import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      heading: "Play Football",
      addedOn: "Sat Mar 30 2024 00:02:26 GMT+0530",
      description: "Play football at 6pm",
      status: "Completed",
    },
    {
      id: 2,
      heading: "Complete Assignment",
      description: "Complete assignment before 12am",
      addedOn: "Sat Mar 30 2024 00:02:26 GMT+0530",
      status: "Pending",
    },
    {
      id: 3,
      heading: "Go to Gym",
      description: "Go to gym at 7pm",
      addedOn: "Sat Mar 30 2024 00:02:26 GMT+0530",
      status: "Pending",
    },
  ],
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
