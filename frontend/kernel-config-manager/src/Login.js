import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
const crypto = require('crypto');

async function login(creds){
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(creds)
  })
  .then(data => data.json())
}

export default function Login({setToken}) {
  const [user,setUser] = useState('')
  const [password,setPassword] = useState('')

  const submitLogin = async e => {
    e.preventDefault();
    if (user != "" && password != ""){
      let hash = crypto.pbkdf2Sync(password, '0', 1000, 64, `sha512`).toString(`hex`);
      const token = await login({
        user,
        hash
      });
      setToken(token);
      window.location.reload(false);
    }
  }

  return (
    <><div style={{ padding: 15, display: 'flex', justifyContent: 'center' }}>
        <h1>Kernel Configuration Manager</h1>
    </div>
    <div className="form-signin w-50 m-auto">
      <div style={{ padding: 20, display: 'flex', justifyContent: 'center'}}>
        <input id="floatingInput" className="form-control" type="text" onChange={(e)=>{setUser(e.target.value)}} placeholder="Username"/>
        <div style={{ padding: 10, display: 'flex', justifyContent: 'center'}}/>
        <input id="floatingPassword" className="form-control" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
      </div>
      <div style={{ padding: 20, display: 'flex', justifyContent: 'center'}}>
        <button className="btn btn-outline-dark" type="submit" onClick={submitLogin}>Login</button>
      </div>
    </div>
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}