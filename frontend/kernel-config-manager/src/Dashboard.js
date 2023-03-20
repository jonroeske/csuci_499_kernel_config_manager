import React, { useState, useEffect } from 'react';
import useClasses from './useClasses';
import { Button, Input, Menu, Table } from 'semantic-ui-react';

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
  let user = JSON.parse(sessionStorage.getItem('token'));
  const [parameter,setParameter] = useState('')
  const [value,setValue] = useState('')
  const submitRuntime = async e => {
    e.preventDefault();
    if (parameter != "" && value != ""){
      const res = await setRuntime({
        parameter,
        value
      })
      .then(setTimeout(function(){window.location.reload(true);}, 3000));
    }
  }
  const submitPersistent = async e => {
    e.preventDefault();
    if (parameter != "" && value != ""){
      const res = await setPersistent({
        parameter,
        value
      })
      .then(setTimeout(function(){window.location.reload(true);}, 3000));
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
        <Table.Row key={index}>
          <Table.Cell>{element[0]}</Table.Cell>
          <Table.Cell><Input size='big' icon='terminal' placeholder={element[1]} onChange={(e)=>{setValue(e.target.value);
            setParameter(element[0]);}}/></Table.Cell>
          <Table.Cell><Button onClick={submitRuntime}>Set Runtime</Button></Table.Cell>
          <Table.Cell><Button onClick={submitPersistent}>Set Persistent</Button></Table.Cell>
        </Table.Row>
      );
    })
  }

  return(
    <>
    <Menu>
      <Menu.Item>Kernel Configuration Manager</Menu.Item>
      <Menu.Menu position='right'>  
        <Menu.Item name={user}/>
        <Menu.Item onClick={Logout} name='Logout'/>
      </Menu.Menu>
    </Menu>
  <div>
    <Table compact>
      <Table.Body>
        {tableCells}
      </Table.Body>
    </Table>
  </div></>
  );
}
