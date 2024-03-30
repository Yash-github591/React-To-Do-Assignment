import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

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
          <Card
            sx={{
              maxWidth: 345,
              margin: "auto",
              marginTop: "10%",
              borderRadius: 4,
              padding: 2,
            }}
          >
            <CardHeader
              title={heading}
              subheader={new Date(addedOn).toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
              })}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0 }}>
                <u>Status</u>:{status}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                <u>Description</u>:-
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                whiteSpace="pre-wrap"
              >
                {description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{ mt: 2, ml: 2 }}
              >
                Close
              </Button>
            </CardActions>
          </Card>
        </Modal>
      </div>
    </>
  );
}
