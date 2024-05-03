import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import RoundCornerCard from '../components/round-corner-card'
import Footer from '../components/footer'
import './desarrollo-proyectos.css'

const DesarrolloProyectos = (props) => {
  return (
    <div className="desarrollo-proyectos-container">
      <Helmet>
        <title>Desarrollo de proyectos - New Value</title>
        <meta
          name="description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta
          property="og:title"
          content="Desarrollo de proyectos - New Value"
        />
        <meta
          property="og:description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1f3cf53e-4c4c-4d97-805a-f94dd20ef72f/ac29ac0a-98b0-455e-8c81-5dc8dac6e68c?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="desarrollo-proyectos-top-container">
        <Header></Header>
        <div className="desarrollo-proyectos-hero">
          <div className="desarrollo-proyectos-content-container">
            <h1 className="desarrollo-proyectos-text Heading textshadow">
              Desarrollo de proyectos
            </h1>
            <h2 className="desarrollo-proyectos-subheading textshadow">
              <span>Desarrollo de proyectos con un enfoque claro.</span>
              <br></br>
              <span>Generar un impacto positivo en la sociedad.</span>
            </h2>
            <div className="desarrollo-proyectos-container01">
              <RoundCornerCard
                text="Comenzamos por comprender a fondo el contexto, objetivos del proyecto, oportunidades y desafíos."
                heading="ANÁLISIS Y DISEÑO:"
                imageSrc="/vectorial/1.svg"
                rootClassName="round-corner-card-root-class-name10"
              ></RoundCornerCard>
              <RoundCornerCard
                text="Ponemos en marcha el proyecto, Implementamos las acciones necesarias y supervisamos su avance"
                heading="EJECUCIÓN Y SEGUIMIENTO:"
                imageSrc="/vectorial/2.svg"
                rootClassName="round-corner-card-root-class-name11"
              ></RoundCornerCard>
              <RoundCornerCard
                text="Realizamos una evaluación para medir el impacto generado y extraer lecciones aprendidas. "
                heading="EVALUACIÓN Y APRENDIZAJE: "
                imageSrc="/vectorial/3.svg"
                rootClassName="round-corner-card-root-class-name12"
              ></RoundCornerCard>
            </div>
          </div>
        </div>
      </div>
      <div className="desarrollo-proyectos-container02">
        <div className="desarrollo-proyectos-container03">
          <div className="desarrollo-proyectos-container04">
            <img
              alt="image"
              src="/vectorial/awsgetit.svg"
              className="desarrollo-proyectos-image"
            />
            <div className="desarrollo-proyectos-container05">
              <Link
                to="/aws-getit"
                className="desarrollo-proyectos-button semiboldcontent"
              >
                AWS Get IT
              </Link>
            </div>
          </div>
        </div>
        <div className="desarrollo-proyectos-container06">
          <div className="desarrollo-proyectos-container07">
            <div className="desarrollo-proyectos-container08">
              <Link
                to="/voluntariado-corporativo"
                className="desarrollo-proyectos-button1 button button-orange-trans semiboldcontent shadow"
              >
                Voluntariado corporativo
              </Link>
            </div>
          </div>
        </div>
        <div className="desarrollo-proyectos-container09">
          <div className="desarrollo-proyectos-container10">
            <div className="desarrollo-proyectos-container11">
              <Link
                to="/marketing-impacto"
                className="desarrollo-proyectos-button2 button button-orange-trans shadow semiboldcontent"
              >
                <span className="semiboldcontent desarrollo-proyectos-text4">
                  <span className="desarrollo-proyectos-text5">
                    Marketing de impacto
                  </span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="desarrollo-proyectos-container12">
          <div className="desarrollo-proyectos-container13">
            <div className="desarrollo-proyectos-container14">
              <Link
                to="/teoria-cambio"
                className="desarrollo-proyectos-button3 button button-orange-trans shadow semiboldcontent"
              >
                Teoría del cambio
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default DesarrolloProyectos
