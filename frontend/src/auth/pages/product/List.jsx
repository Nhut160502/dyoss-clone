import { PlusOutlined } from '@ant-design/icons'
import { Button, Table } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

const List = () => {
  return (
    <>
      <div className="btn-store">
        <Link to={'/dashboard/product/store'}>
          <Button icon={<PlusOutlined />} type="primary"></Button>
        </Link>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </>
  )
}

export default List
