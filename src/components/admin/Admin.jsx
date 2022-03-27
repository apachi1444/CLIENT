import React from 'react';
import Core from '../core/Core';

//Admin Dashboard
function Admin() {
  return (
    <Core isAdmin={true}/>
  )
};

export default Admin;