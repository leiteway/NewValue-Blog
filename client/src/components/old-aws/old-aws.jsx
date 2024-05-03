import React from 'react'

import PropTypes from 'prop-types'

import Header from './header'
import SolidButtonOrange from '../solid-button-orange'
import './old-aws.css'

const OldAWS = (props) => {
  return (
    <div className="old-aws-old-aws">
      <div className="old-aws-top-container">
        <Header></Header>
        <div className="old-aws-hero">
          <div className="old-aws-content-container">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="old-aws-image"
            />
            <div className="old-aws-container">
              <div className="old-aws-container1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="old-aws-top-container1">
        <div className="old-aws-hero1">
          <div className="old-aws-content-container1">
            <div className="old-aws-container2">
              <div className="old-aws-container3">
                <span className="old-aws-text">
                  <span>
                    A lo largo del programa
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="old-aws-text02">AWS GetIT</span>
                  <span>
                    , los estudiantes trabajarán en equipos el diseño de una
                    aplicación y recibirán sesiones virtuales / presenciales
                    impartidas por profesionales en el área tecnológica.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    AWS GetIT se divide en tres pilares:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <li className="list-item">
                  <span className="old-aws-text07">{props.text4}</span>
                </li>
                <span className="old-aws-text08">{props.text}</span>
                <li className="list-item">
                  <span className="old-aws-text09">{props.text5}</span>
                </li>
                <span className="old-aws-text10">{props.text1}</span>
                <li className="list-item">
                  <span className="old-aws-text11">{props.text6}</span>
                </li>
                <span className="old-aws-text12">{props.text2}</span>
              </div>
              <div className="old-aws-container4">
                <span className="old-aws-text13">{props.text3}</span>
                <SolidButtonOrange
                  button="conoce más"
                  rootClassName="solid-button-orange-root-class-name2"
                ></SolidButtonOrange>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

OldAWS.defaultProps = {
  imageSrc: '/vectorial/awsgetit.svg',
  text2:
    'Las y los estudiantes podrán presentar su idea de aplicación en una competición junto a todos los centros participantes. Los equipos expondrán ante un panel de expertas y expertos de la industria y se dará un reconocimiento a los equipos ganadores. ',
  imageAlt: 'image',
  text5: 'Learn and Play',
  text6: 'Diseño y presentación',
  text: 'AWS GetIT presenta el programa y la nube de almacenamiento con una presentación inicial, donde les mostrarán la variedad de oportunidades profesionales en tecnología que existen. ',
  text3: 'Preguntas frecuentes:',
  text1:
    'Por equipos, diseñarán  una idea de aplicación para resolver un problema en su escuela o comunidad, con el apoyo de  GetIT.',
  text4: 'Involucrar e inspirar',
}

OldAWS.propTypes = {
  imageSrc: PropTypes.string,
  text2: PropTypes.string,
  imageAlt: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
}

export default OldAWS
