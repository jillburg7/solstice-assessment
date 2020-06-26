import React from "react";
import TableComponent from "./TableComponent";
import { accounts } from "./initial_json";

export const Profile = (props) => {
  let { customer } = props;

  const columns = [
    {
      title: "Account ID",
      dataIndex: "id",
    },
    {
      title: "customer_id",
      dataIndex: "customer_id",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "city",
      dataIndex: "city",
    },
    {
      title: "state",
      dataIndex: "state",
    },
    {
      title: "zip_code",
      dataIndex: "zip_code",
    },
    {
      title: "solar_farm_id",
      dataIndex: "solar_farm_id",
    },
    {
      title: "capacity_share",
      dataIndex: "capacity_share",
    },
    {
      title: "created_date",
      dataIndex: "created_date",
    },
  ];

  return (
    <>
      <div className="profile-header">
        <button onClick={props.handleReturn}>Return to All Customers</button>
        <h2>Profile</h2>
      </div>
      <div className="customer-details">
        <div className="label">First Name</div>
        <div>{customer.first_name}</div>
        <div className="label">Last Name</div>
        <div>{customer.last_name}</div>
        <div className="label">Email</div>
        <div>{customer.email}</div>
        <div className="label">Active</div>
        <div>{Boolean(customer.active) ? "Yes" : "No"}</div>
        <div className="label">Reason for Joining</div>
        <div>{customer.reason_for_joining ?? "n/a"}</div>
        <div className="label">Joined On</div>
        <div>{customer.created_date}</div>
      </div>
      <div className="table-comp">
        <h2>
          Accounts associated with {customer.first_name} {customer.last_name}
        </h2>
        <TableComponent columns={columns} data={accounts} />
      </div>
    </>
  );
};
