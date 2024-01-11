import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { PropTypes } from 'prop-types'

const Breadcrumbs = (props) => {
  const { data } = props
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        {data.map((item, idx) => (
          <li key={idx}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  ul {
    display: flex;
    font-size: 0.6875rem;
    padding: 1.3125rem 0;
    border-bottom: 1px solid #ccc;
    list-style: none;
    li {
      padding: 0 10px;
      position: relative;
      a {
        color: #000;
        text-decoration: none;
      }
      + li {
        &::after {
          content: '/';
          width: 12px;
          height: 12px;
          position: absolute;
          left: 0;
        }
      }
    }
  }
`

Breadcrumbs.propTypes = {
  data: PropTypes.array,
}

export default Breadcrumbs
