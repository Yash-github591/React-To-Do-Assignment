import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export default function AlertBox({ message }) {
  const { openAlert, setOpenAlert, alertMessage } = useContext(TaskContext);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={openAlert}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, width: "50%", marginLeft: "25%", marginTop: "10px" }}
        >
          {alertMessage}
        </Alert>
      </Collapse>
    </Box>
  );
}
