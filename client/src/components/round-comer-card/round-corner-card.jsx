import React from 'react'

import PropTypes from 'prop-types'

import './round-corner-card.css'

const RoundCornerCard = (props) => {
  return (
    <div
      className={`round-corner-card-container shadow ${props.rootClassName} `}
    >
      <h3 className="round-corner-card-text">{props.heading}</h3>
      <span className="round-corner-card-text1 Content">{props.text}</span>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="round-corner-card-image"
      />
    </div>
  )
}

RoundCornerCard.defaultProps = {
  rootClassName: '',
  text: 'Text',
  heading: '',
  imageAlt: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

RoundCornerCard.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default RoundCornerCard
