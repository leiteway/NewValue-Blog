import React from 'react'

import PropTypes from 'prop-types'

import './solid-button.css'

const SolidButton = (props) => {
  return (
    <div className={`solid-button-container ${props.rootClassName} `}>
      <button className="solid-button-button button Button button-green-trans">
        {props.button}
      </button>
    </div>
  )
}

SolidButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

SolidButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default SolidButton
