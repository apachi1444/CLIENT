import React, { useState } from "react";
import Header from "./components/header/Header";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Manager from './Manager';
import Search from './components/search/Search';
import { useSelector } from "react-redux";
import Core from "./components/core/Core";
import './app.css';
import Loading from "./templates/loading/Loading";

//This is just for testing

function App() {
  const [loading, setLoading]=useState(true);
  const page=useSelector(state=>state.pager);
  setTimeout(()=>{setLoading(false)}, 2000);
  if(loading) return <Loading start={true} still={loading}/>;//Just for now page, testing
  if(page==="core") return <Core/>;//Just for now page;
  //if(page!=="test") return <Core/>;//Just for now page, testing
  return (
    <div className='app'>
      <Contacts/>
      <Header/>
      <Search/>
      <div className='manager' ><Manager page={page}/></div>
      <Footer/>
    </div>
  );
}

export default App;
