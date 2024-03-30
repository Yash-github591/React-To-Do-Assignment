import { Box, Button, Checkbox, IconButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DetailsModal from "./DetailsModal";
import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import {
  deleteTaskFromStore,
  toggleStatusOnStore,
} from "../features/taskSlice";

function Task({ task }) {
  const [checked, setChecked] = useState(
    task.status === "Completed" ? true : false
  );
  const [editTask, setEditTask] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTaskFromStore({ id: task.id }));
  };
  const handleDetails = () => {
    setShowDetails(true);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
    dispatch(
      toggleStatusOnStore({
        id: task.id,
      })
    );
  };
  return (
    <>
      <Box className="task">
        <Box
          style={{
            marginTop: "14px",
          }}
        >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "Checkbox demo" }}
          />
        </Box>
        <Box
          style={{
            textDecoration: checked ? "line-through" : "none",
            color: checked ? "grey" : "black",
            margin: "5px",
          }}
        >
          <h3>{task.heading}</h3>
        </Box>
        <Button
          variant="outlined"
          size="small"
          style={{
            margin: "20px 5px 20px 5px",
          }}
          onClick={handleDetails}
        >
          details
        </Button>
        <DetailsModal
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          heading={task.heading}
          addedOn={task.addedOn}
          description={task.description}
          status={checked ? "Completed" : "Pending"}
        />
        <Button
          variant="outlined"
          size="small"
          style={{
            margin: "20px 5px 20px 5px",
          }}
          onClick={() => setEditTask(true)}
        >
          edit
        </Button>
        <EditTask editTask={editTask} setEditTask={setEditTask} task={task} />
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </>
  );
}

export default Task;
