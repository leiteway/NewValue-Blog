import React from 'react'

import PropTypes from 'prop-types'

import './solid-button-white.css'

const SolidButtonWhite = (props) => {
  return (
    <div className={`solid-button-white-container ${props.rootClassName} `}>
      <button className="solid-button-white-button button text-white-trans Button button-green-trans">
        {props.button}
      </button>
    </div>
  )
}

SolidButtonWhite.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

SolidButtonWhite.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default SolidButtonWhite
