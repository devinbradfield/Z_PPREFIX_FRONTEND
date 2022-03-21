import * as React from "react";
import { useContext } from "react";
import AppContext from "../context/Appcontext.js";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signuppage({ setToken }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);

  let { signup, postState } = useContext(AppContext);
  let navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await signup({
      firstName,
      lastName,
      username,
      password
    });
    // if ((postState.status = 201)) {
      setTimeout(function () {
        return navigate("/login");
      }, 1500);
    // }
  };

  return (
    <>
      <div className="signup-wrapper">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>First Name</p>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <label>
            <p>Last Name</p>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
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
            <button type="submit" onClick={handleOpen}>
              Create Account
            </button>
            <div>
              <Link to="/login">Already have any Account?</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
