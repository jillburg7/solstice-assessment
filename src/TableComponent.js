import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';


function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

function TableComponent(props) {
  return (
    <Table 
      rowKey={record => record.id}
      columns={props.columns} 
      dataSource={props.data} 
      onChange={onChange}
      onRow={(record) => ({
        onClick: () => {
          if (props.onRowClicked) {
            props.onRowClicked(record)
          }
        }
      })}
      // pagination={false} 
      />
  )
}

export default TableComponent;
