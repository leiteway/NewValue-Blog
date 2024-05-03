import React from 'react'

import PropTypes from 'prop-types'

import Header from './header'
import RoundCornerCard from './round-corner-card'
import './top-container.css'

const TopContainer = (props) => {
  return (
    <div className="top-container-top-container">
      <Header></Header>
      <div className="top-container-hero">
        <div className="top-container-content-container">
          <div className="top-container-container">
            <h1 className="top-container-text textshadow Heading">
              {props.heading}
            </h1>
            <h2 className="top-container-subheading textshadow">
              {props.subheading}
            </h2>
          </div>
          <div className="top-container-container1">
            <RoundCornerCard
              text="Evaluamos el desempeño actual de la empresa en relación con los criterios de ESG, establecemos metas y ayudamos a crear una estrategia integral de ESG que esté alineada con los objetivos de la empresa."
              heading="EVALUACIÓN:"
              imageSrc="/vectorial/1.svg"
              rootClassName="round-corner-card-root-class-name4"
            ></RoundCornerCard>
            <RoundCornerCard
              text="Creamos iniciativas para impulsar la sostenibilidad en tu organización, proyectos sociales y medioambientales en línea con tu negocio y programas de sensibilización para concientizar a los empleados y partes interesadas."
              heading="IMPLEMENTACIÓN:"
              imageSrc="/vectorial/2.svg"
              rootClassName="round-corner-card-root-class-name5"
            ></RoundCornerCard>
            <RoundCornerCard
              text="Nos comprometemos a ayudarte a medir, informar y dar seguimiento a tu desempeño en relación con los criterios ESG. Nuestro enfoque se basa en la transparencia y la divulgación responsable."
              heading="REPORTE Y SEGUIMIENTO:"
              imageSrc="/vectorial/3.svg"
              rootClassName="round-corner-card-root-class-name6"
            ></RoundCornerCard>
          </div>
        </div>
      </div>
    </div>
  )
}

TopContainer.defaultProps = {
  subheading:
    'Ayudamos a las organizaciones a adoptar prácticas sostenibles y que generen un impacto positivo en su desempeño empresarial y en la sociedad en general.',
  heading: 'Consultoría ESG',
}

TopContainer.propTypes = {
  subheading: PropTypes.string,
  heading: PropTypes.string,
}

export default TopContainer
