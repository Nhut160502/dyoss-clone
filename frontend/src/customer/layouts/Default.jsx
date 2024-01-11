import React from 'react'
import { PropTypes } from 'prop-types'
import { Footer, Header } from '../components'

const Default = (props) => {
  const { children } = props
  return (
    <div>
      <Header className={window.location.pathname === '/' && 'middle-home'} />
      {children}
      <Footer />
    </div>
  )
}

Default.propTypes = {
  children: PropTypes.node,
}

export default Default
