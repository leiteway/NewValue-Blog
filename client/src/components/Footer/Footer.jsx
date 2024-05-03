import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <Link to="/politica-privacidad" className="footer-navlink">
        <div className="footer-container">
          <span className="footer-text Content">{props.text}</span>
          <span className="footer-text1 Content">{props.text1}</span>
        </div>
      </Link>
      <div className="footer-container1">
        <div className="footer-container2">
          <span className="footer-text2 Content">
            <a href="mailto:info@newvalue.es?subject=" className="footer-link">
              info@newvalue.es
            </a>
            <span className="footer-text3">
              {' '}
              |
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a href="tel:+34611135293" className="footer-link1">
              +34 611 135 293
            </a>
          </span>
        </div>
        <div className="footer-container3">
          <div className="footer-icon-group">
            <a
              href="https://www.linkedin.com/company/new-value-generation/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link2"
            >
              <svg viewBox="0 0 1024 1024" className="footer-icon">
                <path
                  d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"
                  className=""
                ></path>
                <path d="M64 384h192v576h-192v-576z" className=""></path>
                <path
                  d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"
                  className=""
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/newvaluegeneration/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link3"
            >
              <svg viewBox="0 0 1024 1024" className="footer-icon4">
                <path
                  d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"
                  className=""
                ></path>
                <path
                  d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"
                  className=""
                ></path>
                <path
                  d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"
                  className=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text1: 'aviso legal',
  text: 'política de cookies',
  rootClassName: '',
}

Footer.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
