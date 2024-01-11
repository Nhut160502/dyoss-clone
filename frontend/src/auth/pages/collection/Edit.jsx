import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import { formConfigs } from 'src/auth/configs'

const options = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
]

const Edit = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }

  const handleChange = (e) => {
    console.log(e)
  }

  return (
    <Form {...formConfigs} onFinish={handleSubmit}>
      <Form.Item label="Danh Mục" name={'category'} rules={[{ required: true, message: '' }]}>
        <Select onChange={handleChange} options={options} />
      </Form.Item>
      <Form.Item label="Tên bộ sưu tập" name={'name'} rules={[{ required: true, message: '' }]}>
        <Input />
      </Form.Item>
      <Button htmlType="submit">Thêm</Button>
    </Form>
  )
}

export default Edit
