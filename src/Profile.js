import React, { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import { getAccountsByCustomer } from "./service";

import { PageHeader } from "antd";

const columns = [
  {
    title: "Account ID",
    dataIndex: "id",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "State",
    dataIndex: "state",
  },
  {
    title: "Zip Code",
    dataIndex: "zip_code",
  },
  {
    title: "Solar Farm ID",
    dataIndex: "solar_farm_id",
  },
  {
    title: "Capacity Share",
    dataIndex: "capacity_share",
  },
  {
    title: "Created Date",
    dataIndex: "created_date",
  },
  {
    title: "Customer ID",
    dataIndex: "customer_id",
    responsive: ['lg'],
  },
];

export const Profile = (props) => {
  const { customer } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAccountsByCustomer(customer.id).then((data) => {
      setAccounts(data);
      setIsLoading(false);
    });
  }, [customer.id]);

  return (
    <>
      <PageHeader
        onBack={props.handleReturn}
        title="Profile"
        subTitle={`${customer.first_name} ${customer.last_name}`}
      />
      <div className="customer-details">
        <div>
          <div className="label">First Name</div>
          <div>{customer.first_name}</div>
          <div className="label">Last Name</div>
          <div>{customer.last_name}</div>
          <div className="label">Email</div>
          <div>{customer.email}</div>
          <div className="label">Customer ID</div>
          <div>{customer.id}</div>
        </div>
        <div>
          <div className="label">Active</div>
          <div>{Boolean(customer.active) ? "Yes" : "No"}</div>
          <div className="label">Reason for Joining</div>
          <div>{customer.reason_for_joining ?? "n/a"}</div>
          <div className="label">Joined On</div>
          <div>{customer.created_date}</div>
        </div>
      </div>
      <div className="table-component">
        <h2>Associated Accounts</h2>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <TableComponent columns={columns} data={accounts} />
        )}
      </div>
    </>
  );
};
