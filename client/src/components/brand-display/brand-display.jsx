import React from 'react'

import PropTypes from 'prop-types'

import './brand-display.css'

const BrandDisplay = (props) => {
  return (
    <div className={`brand-display-container ${props.rootClassName} `}>
      <img
        alt={props.imageAlt1}
        src={props.imageSrc1}
        className="brand-display-image"
      />
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="brand-display-image1"
      />
      <img
        alt={props.imageAlt6}
        src={props.imageSrc6}
        className="brand-display-image2"
      />
      <img
        alt={props.imageAlt4}
        src={props.imageSrc4}
        className="brand-display-image3"
      />
      <img
        alt={props.imageAlt2}
        src={props.imageSrc2}
        className="brand-display-image4"
      />
      <img
        alt={props.imageAlt5}
        src={props.imageSrc5}
        className="brand-display-image5"
      />
    </div>
  )
}

BrandDisplay.defaultProps = {
  imageAlt4: 'image',
  rootClassName: '',
  imageSrc3: 'cd3be0e6-532a-4c4b-a88a-4515c430d065',
  imageSrc1: '/vectorial/logo_negro_2filas.svg',
  imageAlt1: 'image',
  imageAlt6: 'image',
  imageSrc5: '/vectorial/impacthub.svg',
  imageSrc2: '/vectorial/decelera.svg',
  imageSrc4: '/vectorial/circular_economy_club.svg',
  imageAlt: 'image',
  imageAlt5: 'image',
  imageAlt2: 'image',
  imageAlt3: 'image',
  imageSrc6: '/vectorial/dirse.svg',
  imageSrc: '/vectorial/awsgetit.svg',
}

BrandDisplay.propTypes = {
  imageAlt4: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt6: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc6: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default BrandDisplay
