<<<<<<< HEAD
import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import SignIn from "./components/sign/signIn/SignIn";
import SignUp from "./components/sign/signUp/SignUp";
import Services from "./components/services/Services";
import Locations from "./components/locations/Locations";

function Manager({ page }) {
  switch (page) {
    case "home":
      return <Home />;
    case "about":
      return <About />;
    case "services":
      return <Services />;
    case "locations":
      return <Locations />;
    case "signin":
      return <SignIn />;
    case "signup":
      return <SignUp />;

    default:
      return <h1 style={{ margin: "auto" }}>This Page Is Not Built Yet</h1>;
  }
=======
import React from 'react';
import Welcome from "./components/home/main/welcome/Welcome";
import About from "./components/home/main/about/About";
import SignIn from './components/home/main/sign/signIn/SignIn';
import SignUp from './components/home/main/sign/signUp/SignUp';
import Services from './components/home/main/services/Services';
import Locations from './components/home/main/locations/Locations';

function Manager({page}) {
    switch (page) {
        case "home":
            return <Welcome/>
        case "about":
            return <About/>
        case "services":
            return <Services/>
        case "locations":
            return <Locations/>
        case "signin":
            return <SignIn/>
        case "signup":
            return <SignUp/>
        default:
            return <h1 style={{margin: 'auto'}}>This Page Is Not Built Yet</h1>
    }
>>>>>>> 600420eb7cdb6982ec2090682a35e39663f81d23
}

export default Manager;
