import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

const headerBrand = [
  {
    key: 1,
    to: '/',
    className: 'tab-dyoss-original current',
    child: <span></span>,
  },
  {
    key: 2,
    to: '/',
    className: 'tab-dyoss-custom',
    child: <span></span>,
  },
  {
    key: 3,
    to: '/',
    className: 'tab-dyoss-neo',
    child: <span></span>,
  },
  {
    key: 4,
    to: '/',
    className: 'tab-dyoss-original',
    child: 'HOTLINE: 093 18 18 690',
  },
]
const nav = [
  {
    key: 1,
    title: 'The box',
  },
  {
    key: 2,
    title: 'Nam',
  },
  {
    key: 3,
    title: 'Nữ',
  },
  {
    key: 4,
    title: 'phụ kiện',
  },
  {
    key: 5,
    title: 'Gallery',
  },
  {
    key: 6,
    title: 'Blogs',
  },
  {
    key: 7,
    title: 'Giới thiệu',
  },
]

const Header = (props) => {
  return (
    <Wrapper className="home-header">
      <Top>
        <div className="container">
          <ul className="header-brand">
            {headerBrand.map((item) => (
              <li key={item.key} className={item.className}>
                <Link>{item.child}</Link>
              </li>
            ))}
          </ul>

          <ul className="header-menu">
            <li className="header-menu-item">
              <Link to="/">Đăng nhập</Link>
            </li>
            <li className="header-menu-item">
              <Link to="/">Đăng ký</Link>
            </li>
            <li className="header-menu-item">
              <Link to="#">
                <img
                  src="https://www.dyoss.com/app/themes/dyoss-watch/assets/images/upload/flags/flag-vn.png"
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
      </Top>
      <Middle {...props}>
        <Row>
          <Col lg="4" className="header-search">
            <button></button>
          </Col>
          <Col lg="4" className="header-logo">
            <Link to="/">
              <img
                src="https://www.dyoss.com/app/themes/dyoss-watch/assets/images/upload/logo-black.png"
                alt=""
              />
            </Link>
          </Col>
          <Col lg="4" className="header-cart">
            <Link>
              <button>
                <span>1</span>
              </button>
            </Link>
          </Col>
        </Row>
        <div className="header-nav">
          <ul>
            {nav.map((item) => (
              <li key={item.key}>
                <Link to="/category/nam">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Middle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  :root {
    --blue: #1e90ff;
    --white: #ffffff;
  }
  background-color: #fff;
  position: relative;
  z-index: 1;
`
const Top = styled.div`
  width: 100%;
  background-color: #000;
  .container {
    max-width: 60rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  ul.header-brand {
    li {
      margin: 0 0.625rem;
      opacity: 0.5;
      list-style: none;

      &.current {
        opacity: 1;
      }

      a {
        padding: 4px 10px 0;
        height: 28px;
        padding-left: 14px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          display: block;
          background-repeat: no-repeat;
        }
      }
    }
    .tab-dyoss-original {
      a {
        padding-top: 0;
      }
      span {
        background-image: url(https://www.dyoss.com/app/themes/dyoss-watch/assets/css/../images/upload/original-logo-tab.png);
        background-size: 100px;
        width: 100px;
        height: 100%;
      }
    }

    .tab-dyoss-custom {
      a {
        padding-top: 6px;
      }
      span {
        background-image: url(https://www.dyoss.com/app/themes/dyoss-watch/assets/css/../images/upload/custom-logo-tab.png);
        background-size: 120px;
        width: 120px;
        height: 100%;
      }
    }

    .tab-dyoss-neo span {
      background-image: url(https://www.dyoss.com/app/themes/dyoss-watch/assets/css/../images/upload/neo-logo-tab.png);
      background-size: 100px;
      width: 100px;
      height: 100%;
    }
  }

  ul.header-menu {
    li {
      padding: 0 0.625rem;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      + li {
        border-left: 1px solid #fff;
      }
      a {
        font-size: 0.6875rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    margin: 0.75rem 0;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 11px;
      text-transform: uppercase;
    }
  }
`
const Middle = styled.div`
  .row {
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1.75rem 0;

    .header-search {
      button {
        background-image: url(https://www.dyoss.com/app/themes/dyoss-watch/assets/css/../images/icon-sprites.png);
        background-size: 100px 150px;
        display: inline-block;
        width: 32px;
        height: 32px;
        background-position: -50px 0;
        background-color: transparent;
        border: none;
      }
    }

    .header-logo {
      text-align: center;
      a {
        width: 11.25rem;
        display: inline-block;
        img {
          width: 100%;
          height: auto;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }

    .header-cart {
      text-align: right;
      button {
        position: relative;
        width: 30px;
        height: 28px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 4px;
        &::after {
          content: '';
          width: 14px;
          height: 6px;
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          border: 1px solid #000;
          border-bottom: none;
          border-radius: 4px;
        }

        span {
          font-size: 1.0625rem;
          position: absolute;
          bottom: 0.1875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 0;
          left: 50%;
          color: #000;
          transform: translateX(-50%);
        }
      }
    }
  }
  .header-nav {
    border-top: 1px solid #e6e8ea;
    border-bottom: 1px solid #e6e8ea;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      max-width: 60rem;
      margin-bottom: 0;

      margin-left: auto;
      margin-right: auto;

      li {
        &.active {
          border-bottom: 1px solid #000;
        }
        a {
          display: inline-block;
          line-height: 3.75rem;
          padding: 0 1.125rem;
          color: #000;
          font-size: 0.9125rem;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;

          &::before {
            content: '';
            height: 1px;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #000;
            width: 0px;
            transition: all 0.3s;
          }
          &:hover {
            &::before {
              width: 100%;
            }
          }
        }
      }
    }
  }

  &.middle-home {
    position: absolute;
    z-index: 1;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    .header-cart {
      button {
        border-color: #fff;
        &::after {
          border-color: #fff;
        }
        span {
          color: #fff;
        }
      }
    }
    .header-search {
      button {
        background-position: 0 0;
      }
    }
    .header-logo {
      img {
        content: url(https://www.dyoss.com/app/themes/dyoss-watch/assets/images/upload/logo-white.png);
      }
    }
    .header-nav {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      li {
        a {
          color: #fff;
        }
      }
    }
  }
`

export default Header
