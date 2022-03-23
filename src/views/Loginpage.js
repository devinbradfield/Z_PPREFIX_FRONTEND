import React from "react";
import { useContext } from "react";
import AppContext from "../context/Appcontext.js";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

export default function Loginpage({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  let { logon } = useContext(AppContext);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await logon({
      username,
      password,
    });
    setTimeout(function () {
      return navigate("/mypage");
    }, 1500);
    setUserName(username);
  };

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
      <Card justify="center" sx={{ maxWidth: 250 }}>
        <CardContent>
          <div>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
              <label>
                <p>Username</p>
                <input type="text" onChange={(e) => setUserName(e.target.value)} />
              </label>
              <label>
                <p>Password</p>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
              </label>
              <div>
                <button type="submit">Submit</button>
                <Link to="/signup">
                  <Button renderAs="button">
                    <span>Sign up</span>
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
