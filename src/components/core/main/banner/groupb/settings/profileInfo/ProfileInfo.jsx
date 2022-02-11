import React from 'react';
import './profileInfo.css';
import Item from "../../../item/Item";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import Options from './Options';

function ProfileInfo() {
  const options=["Public", "Private"];
  return (
    <form className="profile-info" action="post">
        <Item icon={<EmailOutlinedIcon/>} title={"Email"} body={[<Options options={options} id={1}/>]}/>
        <Item icon={<LocalPhoneOutlinedIcon/>} title={"Phone Number"} body={[<Options options={options} id={2}/>]}/>
        <Item icon={<GroupOutlinedIcon/>} title={"Friends List"} body={[<Options options={options}/>]} id={3}/>
        <Item icon={<StarRateOutlinedIcon/>} title={"Stars"} body={[<Options options={options}/>]} id={4}/>
    </form>
  )
}

export default ProfileInfo