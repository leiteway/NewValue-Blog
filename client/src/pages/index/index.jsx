import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ChonkyButton from '../components/chonky-button'
import BrandDisplay from '../components/brand-display'
import Footer from '../components/footer'
import './index.css'

const Index = (props) => {
  return (
    <div className="index-container">
      <Helmet>
        <title>New Value</title>
        <meta
          name="description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta property="og:title" content="New Value" />
        <meta
          property="og:description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1f3cf53e-4c4c-4d97-805a-f94dd20ef72f/ac29ac0a-98b0-455e-8c81-5dc8dac6e68c?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="index-top-container">
        <Header></Header>
        <div className="index-hero">
          <div className="index-content-container">
            <h1 className="index-text textshadow">
              Proyecta, colabora, transforma. Impulsa el cambio.
            </h1>
            <h2 className="index-subheading">
              <span>
                Comprometidos a generar un impacto significativo y contribuir a
                la transformación hacia un futuro sostenible.
              </span>
              <br></br>
            </h2>
            <div className="index-container1">
              <Link to="/desarrollo-proyectos" className="index-navlink">
                <ChonkyButton
                  button="desarrollo de proyectos"
                  rootClassName="chonky-button-root-class-name"
                  className="index-component1"
                ></ChonkyButton>
              </Link>
              <Link to="/consultoria-esg" className="index-navlink1">
                <ChonkyButton
                  button="consultoría ESG"
                  rootClassName="chonky-button-root-class-name1"
                  className="index-component2"
                ></ChonkyButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BrandDisplay rootClassName="brand-display-root-class-name"></BrandDisplay>
      <Link to="/por-que-new-value" className="index-navlink2">
        <ChonkyButton
          button="Conócenos"
          rootClassName="chonky-button-root-class-name16"
          className="index-component4"
        ></ChonkyButton>
      </Link>
      <div className="index-container2">
        <div className="index-container3">
          <div className="index-container4">
            <span className="index-text03 Subsubheading">
              <span>¿Por qué New Value?</span>
              <br></br>
            </span>
            <ul className="index-ul list">
              <li className="index-li list-item">
                <span className="Content">
                  <span>
                    New Value presenta un modelo de negocio que se estructura a
                    través de
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="index-text08">filosofía Slow</span>
                  <span>
                    . Para ello, detrás del desarrollo de cada proyecto se
                    realiza un análisis para que este sea sostenible con el
                    entorno y los recursos humanos donde impacta.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </li>
              <li className="index-li1 list-item">
                <span className="Content">
                  <span>
                    Experiencia en
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="index-text14">
                    proyectos internacionales
                  </span>
                  <span>, visión analítica y análisis de casos de éxito.</span>
                  <br></br>
                  <br></br>
                </span>
              </li>
              <li className="index-li2 list-item">
                <span className="Content">
                  <span className="index-text19">Cuidamos cada detalle</span>
                  <span>
                    {' '}
                    y desarrollo de proyecto, logrando un resultado eficiente y
                    alineado con la misión de nuestros clientes.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </li>
              <li className="index-li3 list-item">
                <span className="Content">
                  <span>
                    Reportamos el proceso, avance y resultado con
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="index-text25">total transparencia</span>
                  <span>
                    . Coordinamos todos los recursos necesarios y analizamos
                    oportunidades de mejora.
                  </span>
                  <br></br>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Index
