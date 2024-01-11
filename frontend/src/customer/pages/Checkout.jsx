import React from 'react'
import { styled } from 'styled-components'
import { Breadcrumbs } from '../components'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <Wrapper>
      <Breadcrumbs data={[{ name: 'Checkout' }]} />
      <div className="container">
        <Cart>
          <div className="title">Đơn hàng của bạn (11 sản phẩm)</div>
          <div className="content">
            <Row className="cart-item">
              <Col lg="3">
                <Link>
                  <img
                    src="https://www.dyoss.com/app/uploads/2017/09/upweb_gocchinh13-600x600.jpg"
                    alt=""
                  />
                </Link>
              </Col>
              <Col lg="7">
                <div className="cart-item-name">Iconic - Black/Mesh/40</div>
                <div className="cart-item-option">40mm, Black, Silver Mesh</div>
                <div className="cart-block-price">
                  Đơn giá:
                  <span className="amount"> 2,990,000đ</span>
                </div>
              </Col>
              <Col lg="2" className="remove">
                <Link>remove</Link>
              </Col>
            </Row>
            <Row className="cart-item">
              <Col lg="3">
                <Link>
                  <img
                    src="https://www.dyoss.com/app/uploads/2017/09/upweb_gocchinh13-600x600.jpg"
                    alt=""
                  />
                </Link>
              </Col>
              <Col lg="7">
                <div className="cart-item-name">Iconic - Black/Mesh/40</div>
                <div className="cart-item-option">40mm, Black, Silver Mesh</div>
                <div className="cart-block-price">
                  Đơn giá:
                  <span className="amount"> 2,990,000đ</span>
                </div>
              </Col>
              <Col lg="2" className="remove">
                <Link>remove</Link>
              </Col>
            </Row>
          </div>
        </Cart>
        <Infor>
          <div className="title">Thông tin cá nhân</div>
          <div className="content">
            <form action="">
              <Row>
                <Col lg="12" className="control">
                  <input type="text" id="fullname" />
                  <label htmlFor="fullname">Họ và tên</label>
                </Col>
                <Col lg="12" className="control">
                  <input type="text" id="email" />
                  <label htmlFor="email">Email Address</label>
                </Col>
                <Col lg="12" className="control">
                  <input type="tel" id="phonenumber" />
                  <label htmlFor="phonenumber">Điện thoại di động</label>
                </Col>
                <Col lg="12" className="control">
                  <input type="text" id="address" />
                  <label htmlFor="address">Địa chỉ</label>
                </Col>
                <Col lg="4" className="control">
                  <select name="" id="">
                    <option value="">An Giang</option>
                  </select>
                </Col>
                <Col lg="4" className="control">
                  <select name="" id="">
                    <option value="">Chonj</option>
                  </select>
                </Col>
                <Col lg="4" className="control">
                  <select name="" id="">
                    <option value="">An Giang</option>
                  </select>
                </Col>
                <Col lg="12" className="control">
                  <input type="text" id="note" />
                  <label htmlFor="note">Ghi chú</label>
                </Col>
              </Row>
            </form>
          </div>
        </Infor>
        <Pay>
          <div className="title">Thanh toán</div>
          <div className="content">
            <ul>
              <li>
                <span>
                  Đơn hàng:
                  <span>6,090,000đ</span>
                </span>
                <span>
                  Phí giao:
                  <span></span>
                </span>
              </li>
              <li className="total">
                <span>
                  Tổng cộng:
                  <span>6,090,000đ</span>
                </span>
              </li>
              <Link>Đặt hàng</Link>
            </ul>
          </div>
        </Pay>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    max-width: 60rem;
    margin: auto;
    border-bottom: 1px solid #898989;
  }
  .title {
    font-size: 42px;
    font-weight: 100;
    text-align: center;
    margin: 0 0 1.875rem;
    letter-spacing: 2px;
  }
`
const Cart = styled.div`
  padding: 5rem 0;
  .row {
    margin: 0;
    padding: 0;
  }
  .content {
    max-width: 40rem;
    margin: auto;
  }
  .cart-item {
    padding: 2.5rem 0.625rem;
    border-top: 1px solid #ccc;
    img {
      width: 100%;
    }

    .cart-item-name {
      font-size: 1rem;
      color: #000;
      font-weight: 600;
    }
    .cart-item-option {
      margin: 0 0 0.9375rem;
    }
    .cart-block-price {
      margin: 0 0 0.625rem;
    }
    .remove {
      a {
        color: #898989;
        text-decoration: none;
      }
    }
  }
`
const Infor = styled.div`
  padding: 5rem 0;
  .row {
    margin: 0;
    padding: 0;
  }
  .content {
    max-width: 40rem;
    margin: auto;
  }
`
const Pay = styled.div`
  padding: 5rem 0;
  max-width: 400px;
  margin: auto;
  .content {
    ul {
      list-style: none;
      li {
        border-top: 1px solid #ccc;
        padding: 1.25rem 0%;
        span {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #898989;
        }
      }
      li.total {
        span {
          color: #000;
          font-weight: 500;
        }
      }
    }
    a {
      font-size: 0.8125rem;
      color: #fff;
      text-transform: uppercase;
      min-width: 13.75rem;
      margin: 0;
      padding: 0 1.25rem;
      height: 3.125rem;
      line-height: 2.8125rem;
      background-color: #000;
      display: block;
      text-align: center;
      text-decoration: none;
    }
  }
`

export default Checkout
