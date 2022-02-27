import React from 'react';
import "./settings.css";
import Item from '../../item/Item';
import ActiveStatus from './activeStatus/ActiveStatus';
import Language from './language/Language';
import Location from './location/Location';
import ProfileInfo from './profileInfo/ProfileInfo';
import Theme from './theme/Theme';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'; 
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { v4 as uuid } from "uuid";

function Settings() {
  return (
    <>
        <Item icon={<LanguageOutlinedIcon/>} title={"Language"} body={[<Language/>]} key={uuid()}/>
        <Item icon={<DarkModeOutlinedIcon/>} title={"Theme"} body={[<Theme/>]} key={uuid()}/>
        <Item icon={<RadioButtonCheckedOutlinedIcon/>} title={"Active Status"} body={[<ActiveStatus/>]} key={uuid()}/>
        <Item icon={<LocationOnOutlinedIcon/>} title={"Location"} body={[<Location/>]} key={uuid()}/>
        <Item icon={<AccountBoxOutlinedIcon/>} title={"Profile Info"} body={[<ProfileInfo/>]} key={uuid()}/>
    </>
  )
}

export default Settings