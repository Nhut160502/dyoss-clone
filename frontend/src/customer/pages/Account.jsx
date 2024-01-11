import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Breadcrumbs } from '../components'

const MyAccount = () => {
  return (
    <Wrapper>
      <Breadcrumbs data={[{ name: 'My Account' }]} />
      <div className="container">
        <Login>
          <div className="title">Đăng nhập</div>
          <form action="">
            <Row>
              <Col lg="12" className="control">
                <input type="text" id="email" />
                <label htmlFor="email">Email</label>
              </Col>
              <Col lg="12" className="control">
                <input type="password" id="password" />
                <label htmlFor="password">Mật khẩu</label>
              </Col>
              <div className="option">
                <div className="control-box">
                  <input type="checkbox" id="rememberme" />
                  <label htmlFor="rememberme">Nhớ mật khẩu</label>
                </div>
                <div className="more">
                  Quên mật khẩu? <a href="/">Click vào đây</a>
                </div>
              </div>
              <button type="submit">Đăng nhập</button>
            </Row>
          </form>
        </Login>
        <Register>
          <div className="title">Đăng ký</div>
          <form action="">
            <Row>
              <Col lg="12" className="control">
                <input type="text" id="email" />
                <label htmlFor="email">Email</label>
              </Col>
              <Col lg="12" className="control">
                <input type="password" id="password" />
                <label htmlFor="password">Mật khẩu</label>
              </Col>
              <Col lg="12" className="control">
                <input type="password" id="pre-password" />
                <label htmlFor="pre-password">Nhập lại mật khẩu</label>
              </Col>
              <Col lg="3" className="control">
                <select>
                  <option value="">Anh/chị</option>
                  <option value="">Anh</option>
                  <option value="">Chị</option>
                </select>
              </Col>
              <Col lg="9" className="control">
                <input type="text" id="fullname" />
                <label htmlFor="fullname">Họ tên</label>
              </Col>
              <Col lg="4" className="control">
                <select>
                  <option value="">Ngày sinh</option>
                  <option value="">Anh</option>
                  <option value="">Chị</option>
                </select>
              </Col>
              <Col lg="4" className="control">
                <select>
                  <option value="">Tháng sinh</option>
                  <option value="">Anh</option>
                  <option value="">Chị</option>
                </select>
              </Col>
              <Col lg="4" className="control">
                <select>
                  <option value="">Năm sinh</option>
                  <option value="">Anh</option>
                  <option value="">Chị</option>
                </select>
              </Col>
              <Col lg="12" className="control">
                <input type="tel" id="phone" />
                <label htmlFor="phone">Điện thoại di động</label>
              </Col>
              <div className="control-box">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">
                  Tôi đã xem và đồng ý với <Link>Quy chế sàn giao dịch Dyoss</Link>
                </label>
              </div>

              <button type="submit">Đăng ký</button>
            </Row>
          </form>
        </Register>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
  }

  .row {
    margin: 0;
    padding: 0;
  }

  form {
    button[type='submit'] {
      width: 100%;
      height: 3.125rem;
      text-transform: uppercase;
      font-size: 0.8125rem;
    }
  }
  .title {
    text-align: center;
    margin: 0 0 1.875rem;
    font-size: 42px;
    font-weight: 100;
    letter-spacing: 1px;
  }

  .option {
    display: flex;
    justify-content: space-between;
    padding: 0;
    align-items: center;
    a {
      color: #000;
    }
  }
`
const Login = styled.div`
  padding: 5rem 0;
`
const Register = styled.div`
  width: 100%;
  padding: 5rem 0;
  border-bottom: 1px solid #ccc;
`
export default MyAccount
