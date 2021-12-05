import React, { useState, useEffect } from 'react';
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";



function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);



return (
  <div className="app">
  
    <Router>
      <Header />
        <Routes>
          {/*<Route exact path="/" element={<Home />}> */}
          {/*<Route path="/" caseSensitive={false} element={<Header />}  /> */}
          <Route path="/login" caseSensitive={false} element={<Login/>} />
          <Route path="/checkout" caseSensitive={false} element={<Checkout/>} />
          <Route path="/" caseSensitive={false} element={<Home />}  />
          
        </Routes>
    </Router>
  </div>
);
}
export default App;
