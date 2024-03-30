import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { closeAlert } from "../features/alertSlice";

export default function AlertBox() {
  const alertState = useSelector((state) => state.alert.openAlertStore);
  const message = useSelector((state) => state.alert.alertMessageStore);
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={alertState}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(closeAlert({ message }));
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, width: "50%", marginLeft: "25%", marginTop: "10px" }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}
