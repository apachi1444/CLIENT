import React from 'react';
import { v4 as uuid } from 'uuid';
import "./groupa.css";
import Item from "../item/Item";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import Friend from './friend/Friend';
import Rooms from './rooms/Rooms';
import Owners from './owners/Owners';

function Groupa() {
  //an api call here to get the friendslist
  const friendsList=[<Friend key={uuid()}/>, <Friend key={uuid()}/>, <Friend key={uuid()}/>, <Friend key={uuid()}/>, <Friend key={uuid()}/>];
  return (
    <div className="groupa">
        <Item icon={<LanguageOutlinedIcon/>} title={"Connections"} body={friendsList} key={uuid()}/>
        <Item icon={<SingleBedOutlinedIcon/>} title={"Rooms"} body={[<Rooms/>]}  key={uuid()}/>
        <Item icon={<ApartmentOutlinedIcon/>} title={"Apartments"} body={[<Rooms/>]}  key={uuid()}/>
        <Item icon={<EmojiPeopleOutlinedIcon/>} title={"More Owners"} body={[<Owners/>]}  key={uuid()}/>
    </div>
  );
}

export default Groupa;
