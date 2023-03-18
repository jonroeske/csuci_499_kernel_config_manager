import React, { useState, useEffect } from 'react';
import useClasses from './useClasses';

function Logout(){
  sessionStorage.clear();
  window.location.reload(false);
}

async function setRuntime(values){
  return fetch('http://localhost:3001/set/runtime', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
  .then(data => data.json())
}

async function setPersistent(values){
  return fetch('http://localhost:3001/set/persistent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
  .then(data => data.json())
}

export default function Dashboard() {
  const classes = useClasses();
  const [parameter,setParameter] = useState('')
  const [value,setValue] = useState('')
  const submitRuntime = async e => {
    e.preventDefault();
    if (parameter != "" && value != ""){
      const res = await setRuntime({
        parameter,
        value
      });
      window.location.reload(true);
    }
  }
  const submitPersistent = async e => {
    e.preventDefault();
    if (parameter != "" && value != ""){
      const res = await setPersistent({
        parameter,
        value
      });
      window.location.reload(true);
    }
  }
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
          <td><input placeholder={element[1]} onChange={(e)=>{setValue(e.target.value);
            setParameter(element[0]);}}/></td>
          <td><button onClick={submitRuntime}>Set Runtime</button></td>
          <td><button onClick={submitPersistent}>Set Persistent</button></td>
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
