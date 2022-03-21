import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BasicCard from "./BasicCard";
import Button from "@mui/material/Button";
import AppContext from "../context/Appcontext.js";
import { useContext } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));

export default function ColumnGrid() {
  let { allPosts } = useContext(AppContext);
  console.log(allPosts);

  return (
    <Box direction="column" alignItems="center" justify="center" sx={{ flexGrow: "down" }}>
      {Array.from(allPosts).map((post, index) => (
        <Grid item xs={12} sm={1} md={12} key={index}>
          <Item>
            <BasicCard direction="column" alignItems="center" justify="center" key={post.title} item={post} />
          </Item>
        </Grid>
      ))}
    </Box>
  );
}
