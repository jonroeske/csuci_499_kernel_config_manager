import React from 'react';
import Bootstrap from 'bootstrap';

export default function Login() {
  return (
    <><div style={{ padding: 15, display: 'flex', justifyContent: 'center' }}>
        <h1>Kernel Configuration Manager</h1>
    </div>
    <div style={{ padding: 1, display: 'flex', justifyContent: 'center' }}>
        <b>Login using system credentials</b>
    </div>
    <div class="form-signin w-50 m-auto">
      <div style={{ padding: 20, display: 'flex', justifyContent: 'center'}}>
        <input id="floatingInput" class="form-control" type="text" placeholder="Username"/>
        <div style={{ padding: 10, display: 'flex', justifyContent: 'center'}}/>
        <input id="floatingPassword" class="form-control" type="password" placeholder="Password"/>
      </div>
      <div style={{ padding: 20, display: 'flex', justifyContent: 'center'}}>
        <button class="btn btn-outline-dark" type="submit">Login</button>
        <button class="btn btn-outline-dark" type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
           Logging In...
        </button>
      </div>
    </div>
    </>
  );
}