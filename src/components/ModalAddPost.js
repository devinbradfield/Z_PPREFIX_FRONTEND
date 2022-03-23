import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import CardActions from "@mui/material/CardActions";
import { Button } from "@material-ui/core";
import AppContext from "../context/Appcontext.js";
import { useContext } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";


export default function Model(item) {

    
  let { newPost} = useContext(AppContext);
let post =item.item


const [open, setOpen] = useState(false);
const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

    return(
        <Card sx={{ maxWidth: 850 }}>
            <CardActions>
         
            <Button size="small" href="/Newpost">
              Add New Post
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <TextField label="Title" > Title  </TextField>   
        <div>
                  <textarea></textarea>
        </div>
        <Button  variant="contained" size="small" color="blue" onClick={(e) => newPost(post)}>Add New Post</Button>
                     
              </Box>
            </Modal>
          </CardActions>
        
      </Card>
    )
}


