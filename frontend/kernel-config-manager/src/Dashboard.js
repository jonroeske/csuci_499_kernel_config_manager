import React from 'react';
import Bootstrap from 'bootstrap';

export default function Dashboard() {
  return(
    <><nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Kernel Configuration Manager</a>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-dark" type="submit">Logout</button>
      </form>
    </div>
  </nav>
    
    <div class="d-flex justify-content-center">  
      <div class="spinner-border m-5" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div class="container text-center">
      <div class="row row-cols-3">
        <div class="col">Tunable Class</div>
        <div class="col">Parameter</div>
        <div class="col">Value</div>
      </div>
    </div>

    <div style={{ padding: 20, display: 'flex', justifyContent: 'center'}}>
      <div class="mb3">
      <input type="text" class="form-control" id="valueInput" placeholder="Value"/>
      </div>
      
      <div class="dropdown">  
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Update
        </a>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Runtime</a></li>
          <li><a class="dropdown-item" href="#">Runtime & Persistent</a></li>
        </ul>
      </div>
    </div></>
  );
}