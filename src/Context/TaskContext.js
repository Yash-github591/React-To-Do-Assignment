import { createContext, useState } from "react";

export const TaskContext = createContext(null);

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([
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
  ]);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        openAlert,
        setOpenAlert,
        alertMessage,
        setAlertMessage,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
