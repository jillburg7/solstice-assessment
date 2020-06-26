import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

function TableComponent(props) {
  return (
    <Table 
      rowKey={record => record.id}
      columns={props.columns} 
      dataSource={props.data}
      onRow={(record) => ({
        onClick: () => {
          if (props.onRowClicked) {
            props.onRowClicked(record)
          }
        }
      })}
      />
  )
}

export default TableComponent;
