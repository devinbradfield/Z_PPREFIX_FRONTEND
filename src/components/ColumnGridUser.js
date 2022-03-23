import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BasicCardUser from "./BasicCardUser";

import AppContext from "../context/Appcontext.js";
import { useContext, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));



export default function ColumnGridUser() {

  let { allPosts,  userToken,  } = useContext(AppContext);
  // console.log("User Token",userToken[0]);
  console.log("All Post",allPosts)

  useEffect(() => {
    
  }, [userToken]);
  
  console.log("User Token",userToken);
let postid = userToken[0]

let userPost = allPosts.filter(data => data.userid === postid.id)
// console.log("postid", postid)
// console.log("User Post",userPost) 
    return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
    <Box direction="column" alignItems="center" justify="center" sx={{ flexGrow: "down" }}>
      {Array.from(userPost).map((data, index) => (
        <Grid item xs={12} sm={1} md={12} key={index}>
          <Item>
            <BasicCardUser  key={data.title} item={data} />
          </Item>
        </Grid>
      ))}
    </Box>
    </Grid>
  );
}
