import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Breadcrumbs, Product } from '../components'
import { Col, Row } from 'react-bootstrap'

const obj = {
  media: [
    'https://www.dyoss.com/app/uploads/2019/07/01-2-600x600.jpg',
    'https://www.dyoss.com/app/uploads/2019/07/mystique40-gocnghieng02-1-600x600.jpg',
  ],
  name: 'Mystique – Rose/Black Mesh/40',
  price: '3,100,000đ',
}

const Category = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([])
    for (let index = 0; index < 6; index++) {
      setData((pre) => [...pre, obj])
    }
  }, [])
  return (
    <Wrapper>
      <Breadcrumbs data={[{ url: '/', name: 'The box' }]} />
      <div className="container">
        <Box>
          <div className="title">
            <h2>The Royal</h2>
          </div>
          <div className="description">
            Tuyệt tác hoàn hảo tôn lên từng sắc thái trang phục của nam giới nay càng thêm phần hào
            nhoáng với sắc màu Rose Gold.
          </div>
          <Row>
            {data?.map((item, idx) => (
              <Col lg="4" key={idx}>
                <Product data={item} />
              </Col>
            ))}
          </Row>
        </Box>

        <Box>
          <div className="title">
            <h2>THE MYSTIQUE</h2>
          </div>
          <div className="description">
            Một kiệt tác đến từ DYOSS TEAM vừa xuất hiện vào hè 2019. Mang xu hướng thiết kế
            &quot;vô cực&quot;, loại bỏ hoàn toàn chi tiết thừa với chốt dây được giấu kín. Tinh tế,
            tối giản nhất nhưng vẫn thời trang và lịch lãm.
          </div>
          <Row>
            {data?.map((item, idx) => (
              <Col lg="4" key={idx}>
                <Product data={item} />
              </Col>
            ))}
          </Row>
        </Box>

        <Box>
          <div className="title">
            <h2>THE CLASSIC ICONIC</h2>
          </div>
          <div className="description">
            Là dòng đồng hồ đầu tiên của DYOSS, với thiết kế cổ điển pha chút hiện đại tạo nên dòng
            đồng hồ The Classic Iconic có vè đẹp sang trọng, lịch lãm - phụ kiện quan trọng cho
            người đàn ông thành công.
          </div>
          <Row>
            {data?.map((item, idx) => (
              <Col lg="4" key={idx}>
                <Product data={item} />
              </Col>
            ))}
          </Row>
        </Box>

        <Box>
          <div className="title">
            <h2>THE box</h2>
          </div>
          <div className="description">
            Hộp quà tặng từ DYOSS thiết kế tuyệt đẹp cùng nhiều tuỳ chọn phong phú với mức giá hấp
            dẫn. Phù hợp làm quà tặng ý nghĩa vào các dịp đặc biệt.
          </div>
          <Row>
            {data?.map((item, idx) => (
              <Col lg="4" key={idx}>
                <Product data={item} />
              </Col>
            ))}
          </Row>
        </Box>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
  }
`
const Box = styled.div`
  margin: 5rem 0;
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
  .description {
    font-size: 13px;
    margin-bottom: 30px;
    padding: 0 130px;
    text-align: center;
    font-weight: 500;
  }
`

export default Category
