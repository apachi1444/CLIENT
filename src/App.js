import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from "./components/home/header/Header";
import Contacts from "./components/home/contacts/Contacts";
import Footer from "./components/home/footer/Footer";
import Manager from './Manager';
import Search from './components/home/search/Search';
import Core from "./components/core/Core";
import Admin from "./components/admin/Admin"
import Loading from "./templates/loading/Loading";
import user from './redux/actions/user';
import { reactLocalStorage }  from 'reactjs-localstorage';

import './app.css';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    const theme=reactLocalStorage.getObject('theme');
    if(theme) dispatch(user({ theme }));
  }, [dispatch]);
  const [loading, setLoading]=useState(true);
  const page=useSelector(state=>state.pager);
  setTimeout(()=>{setLoading(false)}, 2000);
  if(loading) return <Loading start={true} still={loading}/>;
  
  switch(page){
    case "admin":
      return <Admin/>
    case "core":
      return <Core/>;
    default:
      return <div className="app">
          <Contacts/>
          <Header/>
          <Search/>
          <div className='manager' ><Manager page={page}/></div>
          <Footer/>
        </div>
  }
}

export default App;
