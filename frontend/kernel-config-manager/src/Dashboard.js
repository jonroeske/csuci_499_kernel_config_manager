import React, { useState, useEffect } from 'react';
import useClasses from './useClasses';

function Logout(){
  sessionStorage.clear();
  window.location.reload(false);
}

export default function Dashboard() {
  const classes = useClasses();
  //let classArr = Object.values(classes);
  const DisplayData = classes.map(
    (info)=>{
      return(
        <>{
          <><tr>
            <th scope='col'>{info[0]}</th>
            <th scope='col'>{info[2]}</th>
          </tr></>
        }</>
      )
    }
  )

  return(
    <><nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand">Kernel Configuration Manager</a>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-dark" onClick={Logout}>Logout</button>
      </form>
    </div>
  </nav>
    
  {DisplayData}</>
  );
}