import React from 'react'

import PropTypes from 'prop-types'

import './round-corner-cardwith-button.css'

const RoundCornerCardwithButton = (props) => {
  return (
    <div
      className={`round-corner-cardwith-button-container shadow ${props.rootClassName} `}
    >
      <div className="round-corner-cardwith-button-container1">
        <h3 className="round-corner-cardwith-button-text">{props.heading}</h3>
        <span className="round-corner-cardwith-button-text1">{props.text}</span>
        <div className="round-corner-cardwith-button-container2">
          <a
            href={props.linkButton}
            target="_blank"
            rel="noreferrer noopener"
            className="round-corner-cardwith-button-link button Button button-green-trans"
          >
            {props.button}
          </a>
        </div>
      </div>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="round-corner-cardwith-button-image"
      />
    </div>
  )
}

RoundCornerCardwithButton.defaultProps = {
  heading: '',
  button: 'Button',
  imageAlt: 'image',
  text: 'Text',
  rootClassName: '',
  linkButton: '',
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName1: '',
}

RoundCornerCardwithButton.propTypes = {
  heading: PropTypes.string,
  button: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  linkButton: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName1: PropTypes.string,
}

export default RoundCornerCardwithButton
