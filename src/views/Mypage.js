import * as React from "react";
import ColumnGridUser from "../components/ColumnGridUser.js";
import ButtonAppBarUser from "../components/ButtonAppBarUser.js";
import AppContext from "../context/Appcontext.js";
import { useContext, useState} from "react";
import Grid from "@mui/material/Grid";
import { TextField,Box } from "@mui/material";
import { Button } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import { useNavigate,  } from "react-router-dom";


export default function Mypage({post}) {
  let { newPost, userToken, allPosts } = useContext(AppContext);
  
  let navigate = useNavigate();


  let id = userToken[0]
  let userid = id.id
  console.log(userToken)
  console.log(userid)
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [username, setUserName] = useState(userToken)

console.log(title)
console.log(content)
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
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = await newPost({
      userid,
      title,
      content
    });
    setTimeout(function () {
      return navigate("/landing");
    }, 1500);
    
    console.log("inside submit",userid)
  
    };

  return (
    <Grid>
      <ButtonAppBarUser />
      <Button size="small" onClick={handleOpen}  >
        Add Post
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form >
        <div>
          <h1>
            <TextField justify="center" label="Title" onChange={(e) => setTitle(e.target.value)}> </TextField>
          </h1>
              <textarea style={{  minHeight: 200 }} onChange={(e) => setContent(e.target.value)}> </textarea>
          </div>
          </form>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>

      <ColumnGridUser />
    </Grid>
  );
}
