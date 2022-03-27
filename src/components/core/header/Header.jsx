import React from 'react';
import Avatar from "./avatar/Avatar";
import Search from "./search/Search";
import Media from "./media/Media";
import { useSelector, useDispatch } from 'react-redux';
import user from '../../../redux/actions/user';

import "./header.css";

function Header({isAdmin}) {
  const dispatch=useDispatch();
  const { theme } = useSelector(state=>state.user);
  const { mode } = useSelector(state=>state.user);
  return (
      <div className={`core-header-${theme}`}>
          <Avatar isAdmin={isAdmin}/>
          {
            isAdmin &&
            <h3 className="toggle-mode" onClick={()=>dispatch(user({mode: !mode}))}>
              {
                mode ? 'User Mode': "Admin Mode"
              }
            </h3>
          }
          <Search/>
          <Media/>
      </div>
  );
}

Header.defaultProps={
  isAdmin: false
}
export default Header;
