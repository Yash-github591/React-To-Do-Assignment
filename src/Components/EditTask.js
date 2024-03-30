import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { Alert, TextField } from "@mui/material";

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

export default function EditfTask({ editTask, setEditTask, task }) {
  const [taskHeading, setTaskHeading] = useState(task.heading);
  const [description, setDescription] = useState(task.description);
  const { tasks, setTasks, setOpenAlert, setAlertMessage } =
    useContext(TaskContext);

  const handleEdit = () => {
    setTasks(
      tasks.map((item) =>
        item.id === task.id
          ? {
              ...item,
              heading: taskHeading,
              description: description,
            }
          : item
      )
    );
    setEditTask(false);
    setAlertMessage("Task Updated Successfully!");
    setOpenAlert(true);
  };
  const handleClose = () => setEditTask(false);

  return (
    <>
      <div>
        <Modal
          open={editTask}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1>
              <strong>
                <u>Edit Task</u>
              </strong>
            </h1>
            <h3>Task Heading: </h3>
            <TextField
              id="outlined-basic"
              label="Heading"
              variant="outlined"
              size="small"
              value={taskHeading}
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
              value={description}
              style={{ width: "100%" }}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              variant="outlined"
              onClick={handleEdit}
              sx={{ mt: 2, ml: 2 }}
            >
              Edit Task
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
