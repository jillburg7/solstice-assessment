import React from 'react';
import './App.css';
import {customers} from './initial_json'

import TableComponent from './TableComponent'

function App() {
  return (
    <div className="App">
      <TableComponent data={customers}/>
    </div>
  );
}

export default App;
