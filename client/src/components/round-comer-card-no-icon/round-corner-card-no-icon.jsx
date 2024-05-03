import React from 'react'

import PropTypes from 'prop-types'

import './round-corner-card-no-icon.css'

const RoundCornerCardNoIcon = (props) => {
  return (
    <div
      className={`round-corner-card-no-icon-container shadow ${props.rootClassName} `}
    >
      <h3 className="round-corner-card-no-icon-text">{props.heading}</h3>
      <span className="round-corner-card-no-icon-text1">{props.text}</span>
    </div>
  )
}

RoundCornerCardNoIcon.defaultProps = {
  imageAlt: 'image',
  heading: '',
  imageSrc: 'f3f4f2ec-4ccf-4e80-b056-0c1a33bb6361',
  text: 'Text',
  rootClassName: '',
}

RoundCornerCardNoIcon.propTypes = {
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default RoundCornerCardNoIcon
