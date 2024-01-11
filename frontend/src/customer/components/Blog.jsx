import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const Blog = (props) => {
  const { data } = props
  return (
    <Wrapper>
      <Link className="image">
        <img src={data?.url} alt="" />
      </Link>
      <div className="date">{data?.date}</div>
      <h2 className="title">{data?.title}</h2>
      <p className="description">{data?.desc}</p>
      <button>
        <Link>Xem chi tiết</Link>
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 5rem;
  text-align: center;
  .image {
    display: block;
    margin: 0 0 1.875rem;
    img {
      width: 100%;
    }
  }
  .date {
    font-size: 0.8125rem;
    line-height: 1;
    color: #898989;
    margin: 0 0 1.875rem;
    text-transform: uppercase;
    text-align: center;
  }
  .title {
    font-size: 1.5rem;
    line-height: 1;
    margin: 0 0 1.875rem;
    line-height: 1.2;
    text-align: center;
    font-weight: 400;
  }
  .description {
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 13px;
    font-weight: 600;
    text-align: center;
  }

  button {
    margin-top: 1.875rem;
    display: inline;
    margin-top: 1.875rem;
    font-size: 0.8125rem;
    color: #fff;
    text-transform: uppercase;
    min-width: 13.75rem;
    height: 3.125rem;
    line-height: 2.8125rem;
    background-color: #000;
    padding: 0 20px;
    border: 1px solid #000;
    transition: all 0.4s;
    a {
      color: #fff;
      text-transform: uppercase;
      text-decoration: none;
    }
    &:hover {
      background-color: #fff;
      a {
        color: #000;
      }
    }
  }

  & {
    border-bottom: 1px solid #000 !important;
  }
`

Blog.propTypes = {
  data: PropTypes.object,
}

export default Blog
