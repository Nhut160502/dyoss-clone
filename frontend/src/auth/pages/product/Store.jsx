import { Button, Form, Input, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import { Uploads } from 'src/auth/components'
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

const Store = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }

  const handleChange = (e) => {
    console.log(e)
  }

  return (
    <Form {...formConfigs} onFinish={handleSubmit}>
      <Form.Item label="Danh Mục" name="category" rules={[{ required: true, message: '' }]}>
        <Select onChange={handleChange} options={options} />
      </Form.Item>

      <Form.Item label="Bộ sưu tập" name="collection" rules={[{ required: true, message: '' }]}>
        <Select onChange={handleChange} options={options} />
      </Form.Item>

      <Form.Item label="Tên sản phẩm" name="name" rules={[{ required: true, message: '' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Hình ảnh sản phẩm">
        <Uploads />
      </Form.Item>

      <Form.Item label="Banner giới thiệu">
        <Uploads />
      </Form.Item>

      <Form.Item label="Sản phẩm tương tự" name="related">
        <Select options={options} />
      </Form.Item>

      <Form.Item label="Sản phẩm mua cùng" name="together">
        <Select options={options} mode="multiple" />
      </Form.Item>

      <Form.Item label="Sản phẩm tặng kèm" name="promotion">
        <Select options={options} mode="multiple" />
      </Form.Item>

      <Form.Item label="Sản phẩm gợi ý" name="suggested">
        <Select options={options} mode="multiple" />
      </Form.Item>

      <Form.Item label="Thông tin sản phẩm">
        <TextArea rows={8} />
      </Form.Item>

      <Form.Item label="Mô tả sản phẩm">
        <TextArea rows={8} />
      </Form.Item>

      <Button htmlType="submit">Thêm</Button>
    </Form>
  )
}

export default Store
