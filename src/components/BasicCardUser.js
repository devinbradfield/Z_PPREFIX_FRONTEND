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
import { TextField } from "@mui/material";
export default function BasicCardUser(item) {
  let { updatePost, deletePost, userToken } = useContext(AppContext);
  let post = item.item;

  const [content, setContent] = useState(post.content);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [postid, setPostid] = useState(post.id)
  let id = postid
let text = content
console.log(text)
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = await updatePost({
      id,
      title,
      content,
    });
    console.log("inside submit", content);
  };

  return (
    <Card sx={{ maxWidth: 850 }}>
      <CardContent>
        <div>
          <Typography gutterBottom variant="h4" component="div">
            {post.title}
          </Typography>

          <Typography variant="h6" color="text.secondary" noWrap="true">
            {post.content}
          </Typography>
          <Typography variant="h8" component="div">
            Posted at {post.created_at} UTC
          </Typography>
        </div>

        <CardActions>
          <Button onClick={handleOpen}>Edit/View</Button>

          <Button onClick={handleSubmit}>Delete</Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form>
                <div>
                  <h1>
                    <TextField
                      defaultValue={post.title}
                      justify="center"
                      onChange={(e) => setTitle(e.target.value)}
                    >
                      {" "}
                    </TextField>
                  </h1>
                  <textarea
                    style={{ height:'186px', width:'330px' }}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  >
                    {" "}
                  </textarea>
                </div>
              </form>
              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          </Modal>
        </CardActions>
      </CardContent>
    </Card>
  );
}
