import "./App.css";
import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import AppContext from "./context/Appcontext.js";
import Landingpage from "./views/Landingpage";
import Loginpage from "./views/Loginpage";
import Signuppage from "./views/Signuppage";
import Mypage from "./views/Mypage";

function App() {
  //Constants
  const BASE_URL = "http://localhost:8080";
  //states
  const [userToken, setUserToken] = useState(0);
  const [allPosts, setAllPosts] = useState([]);
  

  useEffect(() => {
    fetch(`${BASE_URL}/post`)
      .then((response) => response.json())
      .then((post) => setAllPosts(post))
      .catch((err) => console.log(err));
  }, []);

  function logon(credentials) {
    fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((token) => setUserToken(token))
      .catch((err) => console.log(err));
  }

  function signup(credentials) {

    console.log('credentials', credentials)

    fetch(`${BASE_URL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((token) => token.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  let contextObj = {logon, signup, allPosts, userToken };

  return (
    <AppContext.Provider value={contextObj}>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
