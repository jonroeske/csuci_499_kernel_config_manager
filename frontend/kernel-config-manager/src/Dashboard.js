import React, { useState, useEffect } from 'react';
import useClasses from './useClasses';

function Logout(){
  sessionStorage.clear();
  window.location.reload(false);
}

/*async function setRuntime(values){
  e.preventDefault();
  return fetch('http://localhost:3001/set/runtime', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: values
  })
  .then(data => data.json())
}

async function setPersistent(values){
  e.preventDefault();
  return fetch('http://localhost:3001/set/persistent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: values
  })
  .then(data => data.json())
}*/

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
          <td><input placeholder={element[1]}/></td>
          <td><button /*onClick={setRuntime({"parameter" : element[0], "value" : element[1]})}*/>Set Runtime</button></td>
          <td><button /*onClick={setPersistent({"parameter" : element[0], "value": element[1]})}*/>Set Persistent</button></td>
        </tr>
      );
    })
  }

  return(
    <><nav>
    <div>
      <p>Kernel Configuration Manager</p>
      <button onClick={Logout}>Logout</button>
    </div>
  </nav>
  <div>
    <table>
      <tbody>
        <tr>
          <td>{tableCells}</td>
        </tr>
      </tbody>
    </table>
  </div></>
  );
}