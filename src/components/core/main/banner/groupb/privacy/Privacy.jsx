import React from 'react';
import "./privacy.css";
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import Options from '../settings/profileInfo/Options';
import Item from '../../item/Item';



function Privacy() {
  const options=["Public", "Private"];
  const cookies=["Allow cookies", "Do not allow cookies"]
  return (
    <div className="privacy">
      <Item icon={<PostAddOutlinedIcon/>} title={"Posts"} body={[<Options options={options}/>]} id={5}/>
      <Item icon={<CookieOutlinedIcon/>} title={"Posts"} body={[<Options options={cookies}/>]} id={6}/>
    </div>
  )
}

export default Privacy