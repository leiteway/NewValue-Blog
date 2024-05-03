import React from 'react'

import PropTypes from 'prop-types'

import './mosaic-component.css'

const MosaicComponent = (props) => {
  return (
    <div className={`mosaic-component-container ${props.rootClassName} `}>
      <div className="mosaic-component-container1">
        <div className="mosaic-component-container2">
          <span className="mosaic-component-text">
            <span className="mosaic-component-text01">¿Por qué New Value?</span>
            <br></br>
          </span>
          <ul className="mosaic-component-ul list">
            <li className="mosaic-component-li list-item">
              <span>{props.text}</span>
            </li>
            <li className="mosaic-component-li1 list-item">
              <span>{props.text1}</span>
            </li>
            <li className="mosaic-component-li2 list-item">
              <span>
                <span>
                  Cuidamos cada detalle y desarrollo de proyecto, logrando un
                  resultado eficiente y alineado con la misión de nuestros
                  clientes.
                </span>
                <br></br>
              </span>
            </li>
            <li className="mosaic-component-li3 list-item">
              <span>
                <span>
                  Reportamos el proceso, avance y resultado con total
                  transparencia. Coordinamos todos los recursos necesarios y
                  analizamos oportunidades de mejora.
                </span>
                <br></br>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

MosaicComponent.defaultProps = {
  text1:
    'Experiencia en proyectos internacionales, visión analítica y análisis de casos de éxito.',
  text: 'New Value presenta un modelo de negocio que se estructura a través de filosofía Slow. Para ello, detrás del desarrollo de cada proyecto se realiza un análisis para que este sea sostenible con el entorno y los recursos humanos donde impacta.',
  rootClassName: '',
}

MosaicComponent.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MosaicComponent
