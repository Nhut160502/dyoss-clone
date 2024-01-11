import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import { Breadcrumbs } from '../components'
import { Product as ProductComp } from '../components'

const data = {
  media: [
    'https://www.dyoss.com/app/uploads/2019/07/01-2-600x600.jpg',
    'https://www.dyoss.com/app/uploads/2019/07/mystique40-gocnghieng02-1-600x600.jpg',
  ],
  name: 'Mystique – Rose/Black Mesh/40',
  price: '3,100,000đ',
}

const ProductPage = () => {
  const refDetail = useRef(null)
  const refMirror = useRef(null)
  const [productScroll, setProductScroll] = useState(false)
  const refImage = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > refDetail?.current?.offsetTop + refDetail?.current?.offsetHeight)
        setProductScroll(true)
      else setProductScroll(false)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {}

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Wrapper>
        <Breadcrumbs data={[{}]} />
        <Row className={productScroll ? 'product-scrollbar active' : 'product-scrollbar'}>
          <Col lg="6">Royal - White/Mesh/40</Col>
          <Col lg="6">
            <span className="price">3,100,000đ</span>
            <button>Mua ngay</button>
          </Col>
        </Row>

        <Detail ref={refDetail}>
          <Row>
            <Col lg="6" className="image">
              <Slider slidesToShow={1} autoplay={false} className="single-slick">
                <img
                  src="https://www.dyoss.com/app/uploads/2019/05/AUTUMN32_blackmesh-600x600.jpg"
                  alt=""
                />
                <img
                  src="https://www.dyoss.com/app/uploads/2019/05/AUTUMN32_gocnghieng_blackmesh-600x600.jpg"
                  alt=""
                />
              </Slider>
              <Slider slidesToScroll={1} slidesToShow={2} className="multiple-slick">
                <div className="item">
                  <img
                    src="https://www.dyoss.com/app/uploads/2019/05/AUTUMN32_blackmesh-600x600.jpg"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://www.dyoss.com/app/uploads/2019/05/AUTUMN32_gocnghieng_blackmesh-600x600.jpg"
                    alt=""
                  />
                </div>
              </Slider>
            </Col>
            <Col lg="6" className="infor">
              <h1 className="name">Autumn – Black/Black Mesh/32</h1>
              <div className="price">
                <span className="amount">3,100,000đ</span>
              </div>
              <div className="desc">
                <p>
                  DYOSS Autumn Black có mặt màu đen rose gold, dây kim loại màu đen cá tính kết hợp
                  với thiết kế size 32 nhỏ nhắn thích hợp cho cổ tay nhỏ nhắn của các bạn nữ Việt
                  tạo ra chiếc đồng hồ DYOSS Autumn Black vừa trẻ trung lại cá tính.
                </p>
              </div>
              <ul>
                <li>Đường kính 32mm - dành cho&nbsp;Nữ.</li>
                <li>Máy Quartz Miyota Nhật Bản.</li>
                <li>Mặt kính Sapphire chống trầy cao cấp.</li>
                <li>Chống nước 5ATM (có thể đeo khi bơi - không khuyến khích).</li>
                <li>Vỏ đồng hồ và khoá bằng thép không gỉ.</li>
                <li>Dây thép nhập khẩu, không gỉ, sơn tĩnh diện - size 14mm.</li>
                <li>Bảo hành 1 năm cho máy và thay pin miễn phí.</li>
              </ul>
            </Col>
          </Row>
        </Detail>

        <Mirror ref={refMirror}>
          <img
            ref={refImage}
            src="https://www.dyoss.com/app/uploads/2018/08/Hinhparallax-mattrangrosegold_dayrosegold-1.jpg"
            alt=""
          />
        </Mirror>

        <Row>
          <Col lg="6" className="option">
            <div className="option-content">
              <img
                src="https://www.dyoss.com/app/themes/dyoss-watch/assets/images/upload/img-100-2.jpg"
                alt=""
              />
              <h3>
                Chống nước
                <br /> 5ATM
              </h3>
              <p>
                Gia công lắp ráp hoàn hảo, giúp bảo vệ đồng hồ một cách tối ưu, chịu được áp lực
                nước ở cấp độ 5ATM.
              </p>
            </div>
          </Col>
          <Col lg="6" className="option">
            <div className="option-content">
              <img
                src="https://www.dyoss.com/app/themes/dyoss-watch/assets/images/upload/img-100.jpg"
                alt=""
              />
              <h3>
                Kính Sapphire
                <br /> chống trầy
              </h3>
              <p>
                Là loại kính có độ bền cao, chống xước tuyệt đối, thường được sử dụng trong các
                thương hiệu cao cấp.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="6" className="banner">
            <a href="https://www.dyoss.com/app/uploads/2019/05/AUTUMN32_blackmesh-600x600.jpg">
              <img
                src="https://www.dyoss.com/app/uploads/2019/05/AUTUMN32_blackmesh-600x600.jpg"
                alt=""
              />
            </a>
          </Col>
          <Col lg="6" className="banner">
            <a href="https://www.dyoss.com/app/uploads/2019/05/AUTUMN32_gocnghieng_blackmesh-600x600.jpg">
              <img
                src="https://www.dyoss.com/app/uploads/2019/05/AUTUMN32_gocnghieng_blackmesh-600x600.jpg"
                alt=""
              />
            </a>
          </Col>
        </Row>

        <Row>
          <Col lg="6" className="option">
            <div className="option-content">
              <img
                src="https://www.dyoss.com/app/themes/dyoss-watch/assets/images/upload/detail/img-100-3.jpg"
                alt=""
              />
              <h3>
                Máy Miyota
                <br /> Nhật bản
              </h3>
              <p>
                Cỗ máy kiểm soát thời gian hoạt động mạnh mẽ và chính xác, thương hiệu nổi danh trên
                toàn thế giới.
              </p>
            </div>
          </Col>
          <Col lg="6" className="option">
            <div className="option-content">
              <img
                src="https://www.dyoss.com/app/themes/dyoss-watch/assets/images/upload/img-100-4.jpg"
                alt=""
              />
              <h3>
                Dây đeo thép
                <br /> mắt lưới
              </h3>
              <p>
                Dây đeo được chạm khắc tinh xảo cho cảm giác rất mềm và nhẹ, và đảm bảo sự thoải mái
                khi đeo.
              </p>
            </div>
          </Col>
        </Row>

        <Suggest>
          <div className="title">
            <h2>Có thể bạn quan tâm</h2>
          </div>
          <Row>
            <Col lg="4">
              <ProductComp data={data} />
            </Col>
            <Col lg="4">
              <ProductComp data={data} />
            </Col>
            <Col lg="4">
              <ProductComp data={data} />
            </Col>
          </Row>
        </Suggest>
      </Wrapper>
    </>
  )
}

const Suggest = styled.div`
  margin: 5rem 0;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  .title {
    h2 {
      text-align: center;
      margin: 0 0 1.875rem;
      font-size: 42px;
      font-weight: 100 !important;
      letter-spacing: 1px;
    }
  }
`

const Detail = styled.div`
  margin: 5rem 0;
  background-color: #fff !important;
  position: relative;
  .row {
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
  }
`

const Mirror = styled.div`
  padding-bottom: 42%;
  position: relative;
  max-height: 20rem;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    width: 100%;
  }
`

const Wrapper = styled.div`
  overflow: hidden;
  background-color: #fff;

  .product-detail {
    max-width: 60rem;
    margin: 5rem auto;
    background-color: #fff;
  }

  .product-scrollbar {
    display: none;
    position: fixed;
    align-items: center;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    padding: 5px 0;
    border-bottom: solid 1px #e6e8ea;
    z-index: 99999;

    &.active {
      display: flex;
    }
    div:last-child {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 0.5rem;
      span {
        font-style: italic;
        font-size: 15px;
      }
      button {
        width: 25%;
        height: 45px;
        border: none;
        background-color: #000;
        color: #fff;
        text-transform: uppercase;
        font-size: 12px;
      }
    }
    > div {
      padding: 0 0.625rem;
    }
    div:first-child {
      padding-left: 20px;
      color: #000;
      font-weight: 100;
    }
  }

  .container {
    margin: 5rem auto;
    max-width: 60rem;
  }

  .image {
    .single-slick {
      img {
        width: 100%;
      }
    }
    .multiple-slick {
      width: 150px;
      margin: 20px auto;
      .item {
        width: 70px !important;
        height: 70px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .infor {
    .name {
      font-size: 1.5rem;
      font-weight: 300;
      line-height: normal;
    }
    .price {
      font-size: 1.5rem;
      font-style: italic;
      margin: 0 0 1.875rem;
    }
    .desc {
      p {
        margin-bottom: 1.875rem;
        text-align: justify;
        font-size: 13px;
        font-weight: 700;
        color: #000;
      }
    }
    ul {
      margin: 0;
      padding-left: 1rem;
      li {
        font-size: 13px;
        font-weight: 700;
      }
    }
  }
  .option {
    background-color: #f2f2f2 !important;
    padding-bottom: 42.96875%;
    position: relative;
    .option-content {
      text-align: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 28.125rem;
      width: 100%;
      margin: auto;
      img {
        height: 3.125rem;
        margin: 0 0 1.25rem;
      }
      h3 {
        font-size: 2.625rem;
        font-weight: 200;
        margin: 0 0 0.9375rem;
      }
      p {
        font-size: 1rem;
        margin: 0;
      }
    }
    + .option {
      background-color: #fff !important;
    }
  }
  .banner {
    img {
      width: 100%;
    }
  }
`

export default ProductPage
