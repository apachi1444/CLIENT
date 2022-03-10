import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/home/header/Header";
import Contacts from "./components/home/contacts/Contacts";
import Footer from "./components/home/footer/Footer";
import Manager from './Manager';
import Search from './components/home/search/Search';
import Core from "./components/core/Core";
import Loading from "./templates/loading/Loading";
// import  styled  from "styled-components";

import './app.css';
// const Wrapper=styled.section`
//   font-family: Poppins;
//   display:  grid;
//   height: 100vh;
//   grid-template-rows: auto auto auto 1fr auto;
//   background-color: #fdfdfd;
//   width: 100vw;
//   overflow:hidden;
// `;
//This is just for testing

function App() {
  const [loading, setLoading]=useState(true);
  const page=useSelector(state=>state.pager);
  setTimeout(()=>{setLoading(false)}, 2000);
  if(loading) return <Loading start={true} still={loading}/>;//Just for now page, testing
  // if(page!=="test") return <Core/>;//Just for now page, testing
  if(page==="core") return <Core/>;//Just for now page;
  return (
    <div className="app">
      <Contacts/>
      <Header/>
      <Search/>
      <div className='manager' ><Manager page={page}/></div>
      <Footer/>
    </div>
  );
}

export default App;
