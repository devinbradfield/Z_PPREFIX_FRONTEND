import "./App.css";
import { Routes, Route } from "react-router-dom";
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
  const [userToken, setUserToken] = useState();
  const [allPosts, setAllPosts] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [userPost, setUserPost] = useState([]);
  const [postInfo, setPostInfo] = useState([]);
  const [state, setState] = useState(false);
  
  console.log(userToken)
  useEffect(() => {
    fetch(`${BASE_URL}/posts`)
      .then((response) => response.json())
      .then((data) => setAllPosts(data))
      .catch((err) => console.log(err));
  }, []);

  function logon(credentials) {
    console.log("login credentials", credentials);
    fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => setUserToken(data))
      .catch((err) => console.log(err));
  }

  function signup(credentials) {
    console.log("credentials", credentials);

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

   function updatePost(updatePost) {
    console.log('post',updatePost)
    
    // let body = JSON.stringify( updatePost )
    // console.log(body)
      return fetch(`${BASE_URL}/posts/${updatePost.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePost),
      })

      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  function newPost(post) {
    console.log("post", post);
    fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }

  function deletePost(post) {  
    console.log("yes",post);
    fetch(`${BASE_URL}/posts/${post}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  let contextObj = {
    logon,
    signup,
    allPosts,
    userInfo,
    userToken,
    userPost,
    deletePost,
    updatePost,
    postInfo,
    newPost
  };



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
