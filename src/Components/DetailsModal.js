import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function DetailsModal({
  showDetails,
  setShowDetails,
  heading,
  addedOn,
  description,
  status,
}) {
  const handleClose = () => setShowDetails(false);

  return (
    <>
      <div>
        <Modal
          open={showDetails}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2>
              <strong>
                <u>Task Details</u>
              </strong>
            </h2>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Task Heading: {heading}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Status: {status}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Added On:{" "}
              {new Date(addedOn).toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
              })}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Description: {description}
            </Typography>
            <Button onClick={handleClose} sx={{ mt: 2, ml: 2 }}>
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
