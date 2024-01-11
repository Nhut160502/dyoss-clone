import React from 'react'
import { styled } from 'styled-components'
import Slider from 'react-slick'
import { Product } from '../components'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

const banner = [
  {
    url: 'https://www.dyoss.com/app/uploads/2017/07/rosa-bannerhomepage.jpg',
    title: (
      <p>
        Dyoss Watch <br />
        Sự tối giản luôn hợp thời.
      </p>
    ),
  },
  {
    url: 'https://www.dyoss.com/app/uploads/2017/07/rosa-bannerhomepage.jpg',
    title: (
      <p>
        Dyoss Watch <br />
        Sự tối giản luôn hợp thời.
      </p>
    ),
  },
  {
    url: 'https://www.dyoss.com/app/uploads/2017/07/rosa-bannerhomepage.jpg',
    title: (
      <p>
        Dyoss Watch <br />
        Sự tối giản luôn hợp thời.
      </p>
    ),
  },
]
const data = {
  media: [
    'https://www.dyoss.com/app/uploads/2019/07/01-2-600x600.jpg',
    'https://www.dyoss.com/app/uploads/2019/07/mystique40-gocnghieng02-1-600x600.jpg',
  ],
  name: 'Mystique – Rose/Black Mesh/40',
  price: '3,100,000đ',
}

const about = [
  {
    img: 'https://www.dyoss.com/app/themes/dyoss-watch/assets/images/upload/img-100.jpg',
    title: (
      <p>
        Kính Sapphire
        <br />
        chống trầy
      </p>
    ),
  },
  {
    img: 'https://www.dyoss.com/app/themes/dyoss-watch/assets/images/upload/img-100-2.jpg',
    title: (
      <p>
        Chống nước <br /> 5ATM
      </p>
    ),
  },
  {
    img: 'https://www.dyoss.com/app/themes/dyoss-watch/assets/images/upload/img-100-3.jpg',
    title: (
      <p>
        Máy Miyota <br />
        Nhật Bản
      </p>
    ),
  },
]

const Home = () => {
  return (
    <Wrapper>
      <Banner>
        <Slider slidesToShow={1} infinite speed={500} slidesToScroll={1}>
          {banner.map((item, idx) => (
            <div key={idx} className="banner-item">
              <img src={item.url} alt="" />
              {item.title}
            </div>
          ))}
        </Slider>
      </Banner>

      <Box>
        <div className="title">
          <h2>Mẩu bán chạy</h2>
        </div>
        <div className="content">
          <ul>
            <li>
              <Product data={data} />
            </li>
            <li>
              <Product data={data} />
            </li>
            <li>
              <Product data={data} />
            </li>
          </ul>
        </div>
      </Box>

      <Category>
        <Row>
          <Col lg="6" className="category-infor">
            <div className="hover"></div>
            <img src="https://www.dyoss.com/app/uploads/2019/07/02-1.jpg" alt="" />
            <div className="inner">
              <h2>Đồng hồ nữ</h2>
              <Link>Xem tất cả</Link>
            </div>
          </Col>
          <Col lg="6" className="category-slider">
            <div className="content">
              <Slider slidesToScroll={1} slidesToShow={1} autoplay arrows={false}>
                <Product data={data} className="product-item" />
                <Product data={data} className="product-item" />
                <Product data={data} className="product-item" />
                <Product data={data} className="product-item" />
                <Product data={data} className="product-item" />
                <Product data={data} className="product-item" />
              </Slider>
            </div>
          </Col>
        </Row>
      </Category>

      <About>
        <Row>
          <Col lg="6" className="infor">
            <div className="content-infor">
              <h2>
                Giới thiệu <br /> Dyoss Watch
              </h2>
              <p>
                Tuyệt tác mới nhất của Dyoss với thiết kế sang trọng, tối giản, hiện đại đã làm siêu
                lòng biết bao tín đồ thời trang. Bất ngờ hơn khi có thể phối với bất kì gu thời
                trang nào mà bạn yêu thích.
              </p>
              <ul>
                {about.map((item, idx) => (
                  <li key={idx}>
                    <img src={item.img} alt="" />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg="6" className="thumnail">
            <img src="https://www.dyoss.com/app/uploads/2019/07/mattrangdaykl.jpg" alt="" />
          </Col>
        </Row>
      </About>

      <Category>
        <Row>
          <Col lg="6" className="category-infor">
            <div className="hover"></div>
            <img src="https://www.dyoss.com/app/uploads/2019/07/01-3.jpg" alt="" />
            <div className="inner">
              <h2>Đồng hồ nam</h2>
              <Link>Xem tất cả</Link>
            </div>
          </Col>
          <Col lg="6" className="category-slider">
            <div className="content">
              <Slider slidesToScroll={1} slidesToShow={1} autoplay arrows={false}>
                <Product data={data} className="product-item" />
                <Product data={data} className="product-item" />
                <Product data={data} className="product-item" />
                <Product data={data} className="product-item" />
                <Product data={data} className="product-item" />
                <Product data={data} className="product-item" />
              </Slider>
            </div>
          </Col>
        </Row>
      </Category>

      <Box>
        <div className="title">
          <h2>Box bán chạy</h2>
        </div>
        <div className="content">
          <ul>
            <li>
              <Product data={data} />
            </li>
            <li>
              <Product data={data} />
            </li>
            <li>
              <Product data={data} />
            </li>
          </ul>
        </div>
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;

  .row {
    > div {
      padding: 0 !important;
    }
  }
`

const Banner = styled.div`
  .banner-item {
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-align: center;
      font-size: 2.625rem;
      max-width: 80%;
      width: 100%;
      margin: 0;
      line-height: normal;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.3;
    }
  }
`

const Box = styled.div`
  max-width: 60rem;
  margin: 5rem auto;

  .content {
    ul {
      list-style: none;
      display: flex;
    }
  }
  .title {
    text-align: center;
    margin-bottom: 30px;
    h2 {
      font-size: 42px;
      font-weight: 100;
    }
  }
`

const About = styled.div`
  .infor {
    display: flex;
    justify-content: center;
    align-items: center;
    .content-infor {
      max-width: 28.125rem;
      h2 {
        text-align: center;
        margin: 0 0 1.5625rem;
        font-size: 42px;
        font-weight: 100;
      }
      p {
        text-align: center;
        margin: 0 0 2.1875rem;
      }
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        li {
          text-align: center;
          img {
            width: 50px;
            height: 60px;
          }
          p {
            margin: 0.9375rem 0 0;
          }
        }
      }
    }
  }
  .thumnail {
    img {
      width: 100%;
    }
  }
`

const Category = styled.div`
  position: relative;
  overflow: hidden;
  .category-infor {
    position: relative;
    &:hover {
      img {
        transform: scale(1.2);
      }
      .hover {
        opacity: 1 !important;
        transition: all 0.4s;
        z-index: 1;
      }
    }

    .hover {
      position: absolute;
      height: 100%;
      width: 100%;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.4s;
      opacity: 0;
    }
    img {
      width: 100%;
      transition: all 0.4s;
    }
    .inner {
      width: 100%;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      h2 {
        color: #fff;
        margin: 0 0 0.625rem;
        font-size: 42px;
        font-weight: 300;
      }
      a {
        text-align: center;
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        min-width: 13.75rem;
        margin: 0;
        font-size: 15px;
        padding: 0 1.25rem;
        height: 3.125rem;
        background-color: #000;
        padding: 0 20px;
        height: 3.125rem;
        line-height: 2.8125rem;
        display: inline-block;
      }
    }
  }
  .category-slider {
    background-color: #f5f5f5;
    position: relative;
    .content {
      width: 100%;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .product-item {
        width: 369px !important;
      }
    }
  }
`

export default Home
