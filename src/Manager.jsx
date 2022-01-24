import React from 'react';
import Home from "./components/home/Home";
import About from "./components/about/About";
import SignIn from './components/sign/signIn/SignIn';
import SignUp from './components/sign/signUp/SignUp';

function Manager({page}) {
    console.log(page);
    switch (page) {
        case "home":
            return <Home/>
        case "about":
            return <About/>
        case "signin":
            return <SignIn/>
        case "signup":
            return <SignUp/>
        default:
            return <>This Page Is Not Built Yet</>
    }
}

export default Manager;