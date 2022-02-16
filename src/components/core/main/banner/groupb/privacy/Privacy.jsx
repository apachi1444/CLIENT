import React from 'react';
import "./privacy.css";
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import Options from '../settings/profileInfo/Options';
import Item from '../../item/Item';
import { v4 as uuid } from "uuid";



function Privacy() {
  const options=["Public", "Private"];
  const cookies=["Allow cookies", "Do not allow cookies"]
  return (
    <div className="privacy">
      <Item icon={<PostAddOutlinedIcon/>} title={"Posts"} body={[<Options options={options}/>]} id={uuid()} key={uuid()}/>
      <Item icon={<CookieOutlinedIcon/>} title={"Cookies"} body={[<Options options={cookies}/>]} id={uuid()} key={uuid()}/>
    </div>
  )
}

export default Privacy;