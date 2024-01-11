import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Blog, Breadcrumbs } from '../components'

const ojb = {
  url: 'https://www.dyoss.com/app/uploads/2017/07/nhung-nuoc-1024x614.jpg',
  date: '24 THÁNG 7, 2017',
  title: 'Chống nước 5ATM là gì?',
  desc: 'Khi mua đồng hồ các bạn thường nhìn thấy trên mặt đồng hồ những kí hiệu như : WR 50M, 5 BAR, 10 ATM …Vậy những chỉ số đó có ý nghĩa gì về thông số và cách sử dụng đồng hồ, sau đây DYOSS sẽ khái quát sơ qua về những kí hiệu này. […]',
}

const Blogs = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([])
    for (let i = 0; i < 6; i++) {
      setData((pre) => [...pre, ojb])
    }
  }, [])
  return (
    <Wrapper>
      <Breadcrumbs data={[{ name: 'Blogs' }]} />
      <div className="container">
        <div className="title">
          <h2>Blogs</h2>
        </div>
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>
              <Blog data={item} />
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    max-width: 60rem;
    margin: 5rem auto;
    padding: 0 160px;
  }
  .title {
    h2 {
      text-transform: uppercase;
      margin-bottom: 1.3rem;
      font-size: 30px;
      letter-spacing: 8px;
      font-weight: normal;
      text-align: center;
    }
  }
  ul {
    list-style: none;
  }
`

export default Blogs
