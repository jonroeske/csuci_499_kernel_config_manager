import React from 'react';

export default function Dashboard() {
  return(
    <><div style={{ padding: 20, display: 'flex', justifyContent: 'left' }}>
    <h1>Kernel Configuration Manager</h1>    
    </div>
    
    <div style={{ padding: 20, display: 'flex', justifyContent: 'center'}}>
    <table>
      <thead>
        <th>Tunable Class</th>
        <th></th>
        <th>Parameter</th>
        <th></th>
        <th>Value</th>
        <th></th>
      </thead>
    </table>
    </div>

    <div style={{ padding: 20, display: 'flex', justifyContent: 'center'}}>
    <button>Save & Update</button>
    </div></>
  );
}