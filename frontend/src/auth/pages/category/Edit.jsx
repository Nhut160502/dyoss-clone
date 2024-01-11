import { Button, Form, Input } from 'antd'
import React from 'react'
import { Uploads } from 'src/auth/components'
import { formConfigs } from 'src/auth/configs'

const data = [
  // {
  //   uid: '-1',
  //   name: 'image.png',
  //   status: 'done',
  //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  // },
]

const Edit = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <Form {...formConfigs} onFinish={handleSubmit}>
      <Form.Item label="Tên danh mục" rules={[{ required: true, message: '' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Banner">
        <Uploads data={data} onGetFiles={(files) => console.log(files)} />
      </Form.Item>
      <Button htmlType="submit">Thêm</Button>
    </Form>
  )
}

export default Edit
