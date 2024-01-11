import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Select = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      setData((pre) => [...pre, i])
    }
  }, [])
  return (
    <Wrapper>
      <div className="single">
        <span>1</span>
        <div>
          <b></b>
        </div>
      </div>
      <div className="drop">
        <div className="drop-search">
          <input type="text" />
        </div>
        <ul className="drop-result">
          {data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  .single {
    cursor: pointer;
    border: 1px solid #000;
    color: #000;
    position: relative;
    height: 3.125rem;
    line-height: 3.125rem;
    padding: 0 0 0 8px;
    span {
      display: block;
      overflow: hidden;
      margin-right: 2.5rem;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    div {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 2.5rem;
      height: 100%;

      &::before {
        content: '';
        height: 1.75rem;
        border: 1px solid #000;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
      }
      b {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '';
        display: block;
        width: 0;
        height: 0;
        border: inset 0.3125rem;
        border-color: #000 transparent transparent;
        border-top-style: solid;
        border-bottom-width: 0;
      }
    }
  }
  .drop {
  }
`

export default Select
