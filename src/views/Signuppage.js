import * as React from "react";
import { useContext } from "react";
import AppContext from "../context/Appcontext.js";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

export default function Signuppage({ setToken }) {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);

  let { signup } = useContext(AppContext);
  let navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await signup({
      firstname,
      lastname,
      username,
      password
    });
      setTimeout(function () {
      return navigate("/login");
      }, 1500);
   
  };

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
      <Card justify="center" sx={{ maxWidth: 250 }}>
        <CardContent>
      <div className="signup-wrapper">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>First Name</p>
            <input type="text" onChange={(e) => setfirstname(e.target.value)} />
          </label>
          <label>
            <p>Last Name</p>
            <input type="text" onChange={(e) => setlastname(e.target.value)} />
          </label>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit" >
              Create Account
            </button>
            <div>
              <Link to="/login">Already have any Account?</Link>
            </div>
          </div>
        </form>
      </div>
      </CardContent>
      </Card>
    </Grid>
  );
}
