import "./App.css";
import { Button } from "@mui/material";
import Task from "./Components/Task";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddTask from "./Components/AddTask";
import AlertBox from "./Components/Alert";
import { useSelector } from "react-redux";

function App() {
  const [addTask, setAddTask] = useState(false);
  const tasksFromStore = useSelector((state) => state.task.tasks);

  return (
    <>
      <div className="App">
        <h1>
          <u>To-Do Application</u>
        </h1>
        <br />
        <div className="task-container">
          <AlertBox />
          <div
            style={{
              marginLeft: "10%",
            }}
          >
            <h2
              style={{
                textAlign: "left",
                marginLeft: "20%",
              }}
            >
              Tasks:-
            </h2>
            {tasksFromStore.length === 0 && (
              <h3
                style={{
                  textAlign: "left",
                  marginLeft: "20%",
                }}
              >
                No Tasks Available
              </h3>
            )}
            {tasksFromStore.length > 0 &&
              tasksFromStore.map((task) => <Task key={task.id} task={task} />)}
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
          </div>
          <AddTask addTask={addTask} setAddTask={setAddTask} />
        </div>
      </div>
    </>
  );
}

export default App;
