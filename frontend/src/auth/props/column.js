import { Image } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export const columnsCategory = [
  {
    title: 'Tên danh mục',
    dataIndex: 'name',
    render: (name, { slug }) => <Link to={`/dashboard/category/edit/${slug}`}>{name}</Link>,
  },
  {
    title: 'Banner',
    dataIndex: 'banner',
    render: (banner) =>
      banner?.map((value, idx) => (
        <div key={idx} className="banner-category">
          <Image src={value.url} />
        </div>
      )),
  },
]

export const columnsSubCategory = [
  {
    title: 'Danh mục',
    dataIndex: 'category',
    render: ({ name }) => name,
  },

  {
    title: 'Tên',
    dataIndex: 'name',
    render: (name, { slug }) => <Link to={`/dashboard/subcategory/edit/${slug}`}>{name}</Link>,
  },
]

export const columnsProduct = [
  {
    title: 'Danh mục',
    dataIndex: 'category',
    render: ({ name }) => name,
  },
  {
    title: 'Loại',
    dataIndex: 'category',
    render: ({ name }) => name,
  },
  {
    title: 'Tên ',
    dataIndex: 'name',
  },
  {
    title: 'Hình ảnh',
    dataIndex: 'media',
    render: (media) => <Image src={media[0].gallery[0]} />,
  },
  {
    title: 'Giá',
    dataIndex: 'attribute',
  },
  {
    title: 'Ngày thêm',
    dataIndex: 'createdAt',
  },
]

export const columnsAttr = []
