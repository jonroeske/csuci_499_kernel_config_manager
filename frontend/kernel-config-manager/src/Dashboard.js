import React, { useState, useEffect } from 'react';
import useClasses from './useClasses';

function Logout(){
  sessionStorage.clear();
  window.location.reload(false);
}

export default function Dashboard() {
  const classes = useClasses();
  let formattedArr = [];
  let tableCells;
  if (classes != undefined){
    for(let i = 0;i<Array(classes)[0].values.length;i++){
      formattedArr.push(JSON.parse(Array(classes)[0].values[i]).data);
    }
    tableCells = formattedArr.map((element,index) => {
      return (
        <tr key={index}>
          <td>{element[0]}</td>
          <td>{element[1]}</td>
        </tr>
      );
    })
  }

  return(
    <><nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand">Kernel Configuration Manager</a>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-dark" onClick={Logout}>Logout</button>
      </form>
    </div>
  </nav>
  <table>
    <tbody>
      <tr>
        <td>{tableCells}</td>
      </tr>
    </tbody>
  </table></>
  );
}