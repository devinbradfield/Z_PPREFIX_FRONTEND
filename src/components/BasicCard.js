import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import CardActions from "@mui/material/CardActions";
import { Button } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";



export default function BasicCard(item) {
  let post = item.item;
 
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    
    <Grid  direction="column" alignItems="center" justify="center" >
    <Card sx={{ width: 850 }}>
      <CardContent>
             <div>
            <Typography variant= "h4" ></Typography>
              {post.title}
            <Typography variant="h6" color="text.secondary" noWrap="true">
              {post.content}
            </Typography>
            <Typography variant="h8" component="div">
            Posted at {post.created_at} UTC
          </Typography>
          </div>
                <CardActions>
          {" "}
          <Button size="small" onClick={handleOpen}>
            View
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {post.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {post.content}
                </Typography>
              </div>
            </Box>
          </Modal>
        </CardActions>
      </CardContent>
    </Card>
    </Grid>
    
  );
}
