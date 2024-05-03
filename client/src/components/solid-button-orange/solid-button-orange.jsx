import React from 'react'

import PropTypes from 'prop-types'

import './solid-button-orange.css'

const SolidButtonOrange = (props) => {
  return (
    <div className={`solid-button-orange-container ${props.rootClassName} `}>
      <button className="solid-button-orange-button button Button button-orange-trans">
        {props.button}
      </button>
    </div>
  )
}

SolidButtonOrange.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

SolidButtonOrange.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SolidButtonOrange
