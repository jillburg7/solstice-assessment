import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllCustomers } from "./service";

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
  const [isLoading, setIsLoading] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [customerSelected, setCustomerSelected] = useState();

  useEffect(() => {
    setIsLoading(true);
    getAllCustomers().then((data) => {
      setCustomers(data);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (record) => {
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
        <div className="table-component">
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
