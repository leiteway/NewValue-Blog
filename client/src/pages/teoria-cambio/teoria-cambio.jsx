import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ChonkyButton from '../components/chonky-button'
import Footer from '../components/footer'
import './teoria-cambio.css'

const TeoriaCambio = (props) => {
  return (
    <div className="teoria-cambio-container">
      <Helmet>
        <title>Teoría del Cambio - New Value</title>
        <meta
          name="description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta property="og:title" content="Teoría del Cambio - New Value" />
        <meta
          property="og:description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1f3cf53e-4c4c-4d97-805a-f94dd20ef72f/ac29ac0a-98b0-455e-8c81-5dc8dac6e68c?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="teoria-cambio-top-container">
        <Header></Header>
        <div className="teoria-cambio-hero">
          <div className="teoria-cambio-content-container">
            <h1 className="teoria-cambio-text Heading">Teoría del Cambio</h1>
            <h2 className="teoria-cambio-text01">
              Te ayudamos a estructurar la teoría del cambio de tu organización,
              analizando objetivos deseados e identificando la estrategia que
              ayude a alcanzar estos.
            </h2>
          </div>
        </div>
      </div>
      <div className="teoria-cambio-container1">
        <div className="teoria-cambio-mosaic-component">
          <div className="teoria-cambio-container2"></div>
          <div className="teoria-cambio-container3">
            <span className="teoria-cambio-text02 Content">
              <span className="Content">
                La
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="teoria-cambio-text04">teoría del cambio</span>
              <span className="Content">
                {' '}
                es importante en una organización ya que proporciona una guía
                clara y estructurada para alcanzar los objetivos deseados y
                lograr el éxito. Obtendrás una visión clara, identificarás
                dificultades y alinearás a la organización.
              </span>
              <span className="Content">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="teoria-cambio-text07 Content">
              <span>
                Conoce nuestro método, como paso a paso te ayudaremos a definir
                de manera clara tus objetivos y el camino para lograrlos:
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <ul className="teoria-cambio-ul list">
              <li className="teoria-cambio-li boldcontent">
                <span className="Content">Comprendemos tus necesidades.</span>
              </li>
              <li className="teoria-cambio-li1 boldcontent">
                <span className="Content">
                  Identificamos los resultados deseados.
                </span>
              </li>
              <li className="teoria-cambio-li2 boldcontent">
                <span className="Content">
                  <span>Creamos un modelo de cambio.</span>
                  <br></br>
                </span>
              </li>
              <li className="teoria-cambio-li3 boldcontent">
                <span className="Content">
                  <span>Diseño del plan de implementación.</span>
                  <br></br>
                </span>
              </li>
              <li className="teoria-cambio-li4 boldcontent">
                <span className="Content">
                  <span>Monitoreo y evaluación del progreso.</span>
                  <br></br>
                </span>
              </li>
            </ul>
            <span className="teoria-cambio-text21 Content">
              Cuéntanos un poco más sobre tu organización para poder analizar
              vuestros objetivos y estructurar el método para lograrlos.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="teoria-cambio-videos-container">
        <div className="teoria-cambio-container4">
          <Link to="/contactanos" className="teoria-cambio-navlink">
            <ChonkyButton
              button="¿Hablamos?"
              rootClassName="chonky-button-root-class-name12"
              className="teoria-cambio-component1"
            ></ChonkyButton>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name11"></Footer>
    </div>
  )
}

export default TeoriaCambio
