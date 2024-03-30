import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTaskToStore } from "../features/taskSlice";
import { openAlert, closeAlert } from "../features/alertSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 4, // Add this line to make corners rounded
  p: 4,
};

export default function AddTask({ addTask, setAddTask }) {
  const [taskHeading, setTaskHeading] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    // setTasks([
    //   ...tasks,
    //   {
    //     id: tasks.length + 1,
    //     heading: taskHeading,
    //     description: description,
    //     addedOn: new Date().toString(),
    //     status: "Pending",
    //   },
    // ]);
    dispatch(
      addTaskToStore({
        heading: taskHeading,
        description: description,
      })
    );
    setAddTask(false);
    // setAlertMessage("Task Added Successfully!");
    // setOpenAlert(true);
    dispatch(openAlert({ message: "Task Added Successfully!" }));
  };
  const handleClose = () => setAddTask(false);

  return (
    <>
      <div>
        <Modal
          open={addTask}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1>
              <strong>
                <u>Add Task</u>
              </strong>
            </h1>
            <h3>Task Heading: </h3>
            <TextField
              id="outlined-basic"
              label="Heading"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              onChange={(e) => setTaskHeading(e.target.value)}
            />
            <h3>Description: </h3>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              size="small"
              style={{ width: "100%" }}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              variant="outlined"
              onClick={handleAdd}
              sx={{ mt: 2, ml: 2 }}
            >
              Add
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{ mt: 2, ml: 2 }}
            >
              Cancel
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
