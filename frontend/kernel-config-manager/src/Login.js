import React from 'react';

export default function Login() {
  return (
    <><div style={{ padding: 15, display: 'flex', justifyContent: 'center' }}>
        <h1>Kernel Configuration Manager</h1>
    </div>
    <div style={{ padding: 1, display: 'flex', justifyContent: 'center' }}>
        <b>Login using system credentials</b>
    </div>
    <div style={{ padding: 20, display: 'flex', justifyContent: 'center'}}>
      <input type="text" placeholder="username"/>
      <div style={{ padding:10 }}/>
      <input type="password" placeholder="password"/>
    </div>
    <div style={{ padding: 20, display: 'flex', justifyContent: 'center'}}>
      <button>Login</button>
    </div>
    </>
  );
}