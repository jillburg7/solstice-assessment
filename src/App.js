import React, {  useState } from "react";
import "./App.css";
import { customers } from "./initial_json";

import TableComponent from "./TableComponent";
import { Profile } from "./Profile";

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: 'First',
    dataIndex: 'first_name',
  },
  {
    title: 'Last',
    dataIndex: 'last_name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

function App() {
  const [customerSelected, setCustomerSelected] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (record) => {
    console.log(record);
    setCustomerSelected(record);
  };

  const handleReturn = () => {
    setCustomerSelected(null);
  };

  return (
    <div className="App">
      {isLoading && <p className="loading">Loading...</p>}
      {customerSelected ? (
        <Profile customer={customerSelected} handleReturn={handleReturn} />
      ) : (
        <div className="table-comp">
          <h2>Customers</h2>
          <TableComponent 
            columns={columns}
            data={customers} 
            onRowClicked={handleClick} />
        </div>
      )}
    </div>
  );
}

export default App;
