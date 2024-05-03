import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import RoundCornerCard from '../components/round-corner-card'
import ChonkyButton from '../components/chonky-button'
import Footer from '../components/footer'
import './por-que-new-value.css'

const PorQueNewValue = (props) => {
  return (
    <div className="por-que-new-value-container">
      <Helmet>
        <title>¿Por qué New Value?</title>
        <meta
          name="description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta property="og:title" content="¿Por qué New Value?" />
        <meta
          property="og:description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1f3cf53e-4c4c-4d97-805a-f94dd20ef72f/ac29ac0a-98b0-455e-8c81-5dc8dac6e68c?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="por-que-new-value-top-container">
        <Header></Header>
        <div className="por-que-new-value-hero">
          <div className="por-que-new-value-content-container">
            <h1 className="por-que-new-value-text Heading">
              ¿Por qué New Value?
            </h1>
            <div className="por-que-new-value-container1">
              <RoundCornerCard
                text="Transparencia y detalles cuidados en resultados alineados con misión cliente."
                heading="REPORTE:"
                imageSrc="/vectorial/tickverdeazul.svg"
                rootClassName="round-corner-card-root-class-name2"
              ></RoundCornerCard>
              <RoundCornerCard
                text="Enfoque consciente y sostenible, valorando el proceso y fomentando la colaboración"
                heading="FILOSOFÍA SLOW:"
                imageSrc="/vectorial/bombilla.svg"
                rootClassName="round-corner-card-root-class-name3"
              ></RoundCornerCard>
              <RoundCornerCard
                text="Experiencia a nivel global. Equipo multilingüe: español, inglés y portugués"
                heading="INTERNACIONAL:"
                imageSrc="/vectorial/mundo.svg"
                rootClassName="round-corner-card-root-class-name13"
              ></RoundCornerCard>
            </div>
          </div>
        </div>
      </div>
      <div className="por-que-new-value-container2">
        <div className="por-que-new-value-container3">
          <div className="por-que-new-value-container4">
            <span className="por-que-new-value-text01 Content">
              <span className="por-que-new-value-text02">
                Implementamos un servicio de consultoría y gestión de proyectos
                con
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>impacto social y medioambiental.</span>
              <br className="por-que-new-value-text04"></br>
              <br className="por-que-new-value-text05"></br>
              <span>
                Detrás del desarrollo realizamos un análisis para que este sea
                sostenible con el entorno.
              </span>
              <br className="por-que-new-value-text07"></br>
              <br className="por-que-new-value-text08"></br>
              <span>
                Coordinamos todos los recursos necesarios y analizamos
                oportunidades de mejora.
              </span>
              <br className="por-que-new-value-text10"></br>
            </span>
          </div>
        </div>
      </div>
      <div className="por-que-new-value-top-container1">
        <div className="por-que-new-value-hero1">
          <div className="por-que-new-value-content-container1">
            <h1 className="por-que-new-value-text11 subsection">
              <span>Detrás de New Value</span>
              <br></br>
            </h1>
            <div className="por-que-new-value-container5">
              <div className="por-que-new-value-container6">
                <a
                  href="https://www.linkedin.com/company/new-value-generation/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="por-que-new-value-link"
                >
                  <div className="por-que-new-value-container7 linkedInPhoto">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="por-que-new-value-icon"
                    >
                      <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
                    </svg>
                  </div>
                </a>
                <img
                  alt="image"
                  src="/webp/pperez-400w.webp"
                  className="por-que-new-value-image"
                />
              </div>
              <div className="por-que-new-value-container8">
                <span className="por-que-new-value-text14 Content">
                  <span className="por-que-new-value-text15">
                    Patricia Pérez Masegosa
                  </span>
                  <br className="por-que-new-value-text16"></br>
                  <span className="por-que-new-value-text17">
                    Founder &amp; ASG Specialist at New Value
                  </span>
                  <br className="por-que-new-value-text18"></br>
                </span>
                <span className="por-que-new-value-text19 Content">
                  <span>
                    &quot;Mi pasión por la naturaleza afloró durante los años
                    que viví en Brasil. Implico a instituciones y empresas para
                    generar un cambio medioambiental y social en su entorno.
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Llevo trabajando en el área de RSC desde 2016 y durante este
                    tiempo he podido colaborar con compañías internacionales,
                    startups, sector público y entidades sociales.
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    A través de mi experiencia deseo involucrar las
                    organizaciones para generar cambios con impacto sostenible
                    en su entorno.&quot;
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <Link to="/contactanos" className="por-que-new-value-navlink">
              <ChonkyButton
                button="¿Hablamos?"
                rootClassName="chonky-button-root-class-name3"
                className="por-que-new-value-component4"
              ></ChonkyButton>
            </Link>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default PorQueNewValue
