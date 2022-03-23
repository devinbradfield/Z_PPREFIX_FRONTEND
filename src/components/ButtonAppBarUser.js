import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="home" sx={{ mr: 2 }}>
            <HomeIcon onClick={event =>  window.location.href='/landing'} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyFace
          </Typography>
          {/* <Link to="/login"> */}
          <Button color="inherit" href="/landing">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
