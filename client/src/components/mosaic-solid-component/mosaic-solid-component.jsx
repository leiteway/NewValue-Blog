import React from 'react'

import PropTypes from 'prop-types'

import './mosaic-solid-component.css'

const MosaicSolidComponent = (props) => {
  return (
    <div
      className={`mosaic-solid-component-mosaic-component ${props.rootClassName} `}
    >
      <div className="mosaic-solid-component-container">
        <span className="mosaic-solid-component-text">
          <span className="mosaic-solid-component-text01">
            ¿Por qué New Value?
          </span>
          <br></br>
        </span>
        <ul className="mosaic-solid-component-ul list">
          <li className="mosaic-solid-component-li list-item">
            <span className="mosaic-solid-component-text03">
              New Value presenta un modelo de negocio que se estructura a través
              de filosofía Slow. Para ello, detrás del desarrollo de cada
              proyecto se realiza un análisis para que este sea sostenible con
              el entorno y los recursos humanos donde impacta.
            </span>
          </li>
          <li className="mosaic-solid-component-li1 list-item">
            <span className="mosaic-solid-component-text04">
              Experiencia en proyectos internacionales, visión analítica y
              análisis de casos de éxito.
            </span>
          </li>
          <li className="mosaic-solid-component-li2 list-item">
            <span className="mosaic-solid-component-text05">
              <span>
                Cuidamos cada detalle y desarrollo de proyecto, logrando un
                resultado eficiente y alineado con la misión de nuestros
                clientes.
              </span>
              <br></br>
            </span>
          </li>
          <li className="mosaic-solid-component-li3 list-item">
            <span className="mosaic-solid-component-text08">
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
      <div className="mosaic-solid-component-container1"></div>
    </div>
  )
}

MosaicSolidComponent.defaultProps = {
  rootClassName: '',
}

MosaicSolidComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default MosaicSolidComponent
