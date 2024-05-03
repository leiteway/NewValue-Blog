import React from 'react'

import PropTypes from 'prop-types'

import './photo-button.css'

const PhotoButton = (props) => {
  return (
    <div className={`photo-button-container ${props.rootClassName} `}>
      <div className="photo-button-container1">
        <div className="photo-button-container2">
          <button className="photo-button-button button button-green-trans shadow">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  )
}

PhotoButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
  linkComponent: '',
  rootClassName1: '',
  rootClassName2: '',
}

PhotoButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  linkComponent: PropTypes.string,
  rootClassName1: PropTypes.string,
  rootClassName2: PropTypes.string,
}

export default PhotoButton
