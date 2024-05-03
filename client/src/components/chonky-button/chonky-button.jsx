import React from 'react'

import PropTypes from 'prop-types'

import './chonky-button.css'

const ChonkyButton = (props) => {
  return (
    <div className={`chonky-button-container ${props.rootClassName} `}>
      <button className="chonky-button-button button button-green-trans shadow">
        {props.button}
      </button>
    </div>
  )
}

ChonkyButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

ChonkyButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default ChonkyButton
