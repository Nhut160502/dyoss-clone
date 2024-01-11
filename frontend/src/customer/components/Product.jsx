import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const Product = (props) => {
  const { data } = props
  return (
    <Wrapper {...props}>
      <Link to="/product/acs">
        <div className="image">
          <img src={data.media[0]} alt={data.name} />
          <img src={data.media[1]} alt={data.name} />
        </div>
        <p className="name">{data.name}</p>
        <div className="price">
          <span>{data.price}</span>
        </div>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  a {
    display: block;
    color: #000;
    text-decoration: none;
    &:hover {
      .image {
        img:last-child {
          display: block;
        }
        img:first-child {
          display: none;
        }
      }
    }
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img:last-child {
        display: none;
      }
      img {
        max-width: 100%;
      }
    }

    .name {
      text-align: center;
      margin-bottom: 0 !important;
    }
    .price {
      text-align: center;
      span {
        color: #666;
        font-weight: 600;
      }
    }
  }
`

Product.propTypes = {
  data: PropTypes.object,
}

export default Product
