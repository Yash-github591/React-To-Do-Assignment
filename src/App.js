import "./App.css";
import { Button } from "@mui/material";
import Task from "./Components/Task";
import AddIcon from "@mui/icons-material/Add";
import { useState, useContext } from "react";
import AddTask from "./Components/AddTask";
import AlertBox from "./Components/Alert";
import { TaskContext } from "./Context/TaskContext";

function App() {
  const [addTask, setAddTask] = useState(false);
  const { tasks, alertMessage } = useContext(TaskContext);

  return (
    <>
      <div className="App">
        <h1>
          <u>To-Do Application</u>
        </h1>
        <br />
        <div className="task-container">
          <AlertBox />
          <h2
            style={{
              textAlign: "left",
              marginLeft: "20%",
            }}
          >
            Tasks:-
          </h2>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            style={{
              marginRight: "51%",
            }}
            onClick={() => setAddTask(true)}
          >
            Add Task
          </Button>
          <AddTask addTask={addTask} setAddTask={setAddTask} />
        </div>
      </div>
    </>
  );
}

export default App;
