import React from 'react';
import Item from "../item/Item";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import "./groupa.css";

function Groupa() {
  return (
    <div className="groupa">
        <Item icon={<LanguageOutlinedIcon/>} title={"Connections"}/>
        <Item icon={<SingleBedOutlinedIcon/>} title={"Rooms"}/>
        <Item icon={<ApartmentOutlinedIcon/>} title={"Apartments"}/>
        <Item icon={<EmojiPeopleOutlinedIcon/>} title={"More Owners"}/>
    </div>
  );
}

export default Groupa;
