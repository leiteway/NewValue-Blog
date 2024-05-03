import React from 'react'

import PropTypes from 'prop-types'

import Header from './header'
import RoundCornerCard from './round-corner-card'
import './top-container1.css'

const TopContainer1 = (props) => {
  return (
    <div className="top-container1-top-container">
      <Header></Header>
      <div className="top-container1-hero">
        <div className="top-container1-content-container">
          <h1 className="top-container1-text textshadow Heading">
            {props.heading}
          </h1>
          <h2 className="top-container1-subheading textshadow">
            {props.subheading}
          </h2>
          <div className="top-container1-container">
            <RoundCornerCard
              text="Evaluamos el desempeño actual de la empresa en relación con los criterios de ESG, establecemos metas y ayudamos a crear una estrategia integral de ESG que esté alineada con los objetivos de la empresa."
              heading="EVALUACIÓN:"
              imageSrc="/vectorial/1.svg"
              rootClassName="round-corner-card-root-class-name23"
            ></RoundCornerCard>
            <RoundCornerCard
              text="Creamos iniciativas para impulsar la sostenibilidad en tu organización, proyectos sociales y medioambientales en línea con tu negocio y programas de sensibilización para concientizar a los empleados y partes interesadas."
              heading="IMPLEMENTACIÓN:"
              imageSrc="/vectorial/2.svg"
              rootClassName="round-corner-card-root-class-name24"
            ></RoundCornerCard>
            <RoundCornerCard
              text="Nos comprometemos a ayudarte a medir, informar y dar seguimiento a tu desempeño en relación con los criterios ESG. Nuestro enfoque se basa en la transparencia y la divulgación responsable."
              heading="REPORTE Y SEGUIMIENTO:"
              imageSrc="/vectorial/3.svg"
              rootClassName="round-corner-card-root-class-name25"
            ></RoundCornerCard>
          </div>
        </div>
      </div>
    </div>
  )
}

TopContainer1.defaultProps = {
  heading: 'Consultoría ESG',
  subheading:
    'Ayudamos a las organizaciones a adoptar prácticas sostenibles y que generen un impacto positivo en su desempeño empresarial y en la sociedad en general.',
}

TopContainer1.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

export default TopContainer1
