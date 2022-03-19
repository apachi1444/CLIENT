import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reactLocalStorage }  from 'reactjs-localstorage';

import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';

import user from '../../../../../../../redux/actions/user';
import "./theme.css";

function Theme() {
  const { theme } =useSelector(state=>state.user);
  const dispatch=useDispatch();
  const toggle=(the)=>{
    return ()=>{
      if(the!==theme && (the>=0 && the<=6)){
        console.log(the);
        reactLocalStorage.setObject("theme", the);
        dispatch(user({ theme: the }));
      };
    };
  };
  return (
    <form action="post" className="theme">
        <div className={`them-number-1 ${theme===1? 'theme-on': ""}`} onClick={toggle(1)}><LooksOneOutlinedIcon/></div>
        <div className={`them-number-2 ${theme===2? 'theme-on': ""}`}  onClick={toggle(2)}><LooksTwoOutlinedIcon/></div>
        <div className={`them-number-3 ${theme===3? 'theme-on': ""}`}  onClick={toggle(3)}><Looks3OutlinedIcon/></div>
        <div className={`them-number-5 ${theme===5? 'theme-on': ""}`}  onClick={toggle(5)}><Looks4OutlinedIcon/></div>
    </form>
  )
}

export default Theme;