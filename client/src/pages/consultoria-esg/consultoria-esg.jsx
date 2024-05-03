import React from 'react'

import { Helmet } from 'react-helmet'

import TopContainer from '../components/top-container'
import Footer from '../components/footer'
import './consultoria-esg.css'

const ConsultoriaESG = (props) => {
  return (
    <div className="consultoria-esg-container">
      <Helmet>
        <title>Consultoria ESG - New Value</title>
        <meta
          name="description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta property="og:title" content="Consultoria ESG - New Value" />
        <meta
          property="og:description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1f3cf53e-4c4c-4d97-805a-f94dd20ef72f/ac29ac0a-98b0-455e-8c81-5dc8dac6e68c?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <TopContainer></TopContainer>
      <div className="consultoria-esg-container1">
        <div className="consultoria-esg-container2">
          <img
            alt="image"
            src="/vectorial/logo_negro_2filas.svg"
            className="consultoria-esg-image"
          />
        </div>
        <div className="consultoria-esg-container3">
          <span className="consultoria-esg-text boldsubsubheading">
            <span>Métrica Consulting, consultora IT.</span>
            <br></br>
          </span>
          <span className="consultoria-esg-text3 Content">
            Con más de 400 empleados y presencia en España, Perú, Portugal y
            Chile. Hemos implementado la certificación ESG, diseñado la
            estrategia de sostenibilidad a nivel global, adoptado buenas
            prácticas a nivel interno, fomentando la participación en acciones
            sociales y medioambientales, incentivado su plan de formación.
          </span>
        </div>
        <div className="consultoria-esg-container4"></div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default ConsultoriaESG
