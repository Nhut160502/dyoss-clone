import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const footerList = [
  {
    title: 'Sản phẩm',
    desc: [
      {
        name: 'Đồng hồ nam',
      },
      {
        name: 'Đồng hồ nữ',
      },
    ],
  },
  {
    title: 'Về dyoss',
    desc: [
      { name: 'Giới thiệu' },
      { name: 'Blogs' },
      { name: 'VỀ DYOSS' },
      { name: 'Giới thiệu' },
      { name: 'Blogs' },
      { name: 'Câu hỏi thường gặp' },
      { name: 'Thanh toán & giao nhận' },
      { name: 'Chế độ bảo hành' },
      { name: 'Liên hệ' },
    ],
  },
  {
    title: 'Cộng đồng',
    desc: [
      { name: 'CỘNG ĐỒNG' },
      { name: 'Instagram' },
      { name: 'Facebook', className: 'icon' },
      { name: 'Youtube' },
      { name: 'Pinterest' },
    ],
  },
  {
    title: 'Liên hệ',
    desc: [
      { name: 'LIÊN HỆ' },
      { name: 'Hotline: 093 18 18 690' },
      { name: 'Zalo: 093 18 18 690' },
      { name: 'Viber: 093 18 18 690' },
    ],
  },
]

const Footer = () => {
  return (
    <Wrapper>
      <NewsLetter>
        <div className="title">
          <h3>NewsLetter</h3>
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Nhập email để nhận ngay những ưu đãi và các xu hướng mới nhất"
          />
          <button>SUBMIT</button>
        </form>
      </NewsLetter>

      <FooterList>
        {footerList.map((item, idx) => (
          <FooterItem key={idx}>
            <div className="title">
              <h3>{item.title}</h3>
            </div>
            <ul>
              {item.desc.map((ds, idx) => (
                <li key={idx}>
                  <Link className={ds.className && ds.className}>{ds.name}</Link>
                </li>
              ))}
            </ul>
          </FooterItem>
        ))}
      </FooterList>

      <FooterShowRoom>
        <p>
          SHOWROOM 1 VÀ BẢO HÀNH DYOSS
          <br /> Địa chỉ: 453/32 Nguyễn Đình Chiểu, Phường 5, Quận 3, TP Hồ Chí Minh
          <br /> Hotline: 0931818690
        </p>
        <br />
        <p>
          SHOWROOM 2<br /> Địa chỉ: 3/31 Thành Thái, Phường 14, Quận 10, TP Hồ Chí Minh
          <br /> Hotline: 02473009161
        </p>
        <br />
        <p>
          Giấy chứng nhận kinh doanh: <br /> Số 0313808998 do Phòng Đăng ký Kinh Doanh, <br /> Sở Kế
          Hoạch và Đầu Tư TP HCM cấp ngày 15/05/2016 <br />
          <a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=40360">
            <img
              src="https://www.dyoss.com/app/themes/dyoss-watch/assets/images/logo-dathongbao.png"
              alt=""
              width="150"
            />
          </a>
        </p>
      </FooterShowRoom>
      <FooterBottom>
        <p>© 2017 bản quyền thuộc về DYOSS Việt Nam.</p>
        <a href="/dieu-khoan-dieu-kien/">Điều khoản điều kiện</a>
        <a href="/chinh-sach-bao-mat/">Chính sách bảo mật</a>
      </FooterBottom>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding: 4.6875rem 0;
  max-width: 100%;
  width: 40rem;
  margin: 0 auto 4.375rem;
  overflow: hidden;

  .title {
    h3 {
      font-size: 14px;
      text-transform: uppercase;
      line-height: normal;
      margin: 0 0 1.25rem;
      text-align: center;
    }
  }
`

const FooterShowRoom = styled.div`
  margin-bottom: 4.375rem;
  p {
    text-align: center;
    font-size: 13px;
    line-height: 1.6;
    color: #000;
    font-weight: 500;
    margin-bottom: 0;
  }
`

const NewsLetter = styled.div`
  margin-bottom: 4.375rem;
  form {
    max-width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 70%;
      height: 50px;
      padding: 0 20px;
      outline: none;
      background-color: #e5e5e5;
      border: none;
      color: #000;
    }
    button {
      width: 30%;
      height: 50px;
    }
  }
`
const FooterList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.375rem;
`
const FooterItem = styled.div`
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
    li {
      display: block;
      text-align: center;
      font-size: 13px;
      font-weight: 600;
      a {
        color: #000;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        &.icon {
          color: #2199e8;
        }
      }
      + li {
        margin-top: 0.4375rem;
      }
    }
  }
`

const FooterBottom = styled.div`
  text-align: center;
  p {
    margin-bottom: 0;
  }
  a {
    padding: 0 0.75rem;
    color: #000;
    text-decoration: none;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
    + a {
      border-left: 1px solid #000;
    }
  }
`

export default Footer
