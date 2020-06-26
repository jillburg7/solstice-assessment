import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const sortText = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: 'First',
    dataIndex: 'first_name',
    sorter: sortText,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Last',
    dataIndex: 'last_name',
    sorter: sortText,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: sortText,
    sortDirections: ['descend', 'ascend'],
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

function TableComponent(props) {
  return (
    <Table 
      rowKey={record => record.id}
      columns={columns} 
      dataSource={props.data} 
      onChange={onChange}
      onRow={(record) => ({
        onClick: () => {
          console.log(record);
        },
      })}
      pagination={false} />
  )
}

export default TableComponent;
