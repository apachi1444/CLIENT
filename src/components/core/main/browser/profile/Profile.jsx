import React from 'react';
import Info from './info/Info';
import Posts from './posts/Posts';
import './profile.css';

function Profile() {
  return (
    <div className="profile">
        <Info/>
        <h4 className='all-posts'>All Posts(17)</h4>
        <Posts/>
    </div>
  )
}

export default Profile