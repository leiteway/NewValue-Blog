import React from 'react'

import PropTypes from 'prop-types'

import Header from './header'
import VideosContainer from '../videos-container'
import Footer from '../footer'
import './marketing-impacto-copy.css'

const MarketingImpactoCopy = (props) => {
  return (
    <div className={`marketing-impacto-copy-container ${props.rootClassName} `}>
      <div className="marketing-impacto-copy-top-container">
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="marketing-impacto-copy-hero">
          <div className="marketing-impacto-copy-content-container">
            <h1 className="marketing-impacto-copy-text Heading">
              {props.heading}
            </h1>
            <h2 className="marketing-impacto-copy-subheading">
              {props.subheading}
            </h2>
          </div>
        </div>
      </div>
      <div className="marketing-impacto-copy-container1">
        <div className="marketing-impacto-copy-mosaic-component">
          <div className="marketing-impacto-copy-container2"></div>
          <div className="marketing-impacto-copy-container3">
            <span className="marketing-impacto-copy-text01 Subsubheading">
              <span className="marketing-impacto-copy-text02">
                ¿Cómo podemos ayudarte?
              </span>
              <br></br>
            </span>
            <span className="marketing-impacto-copy-text04 Content">
              <span>
                Trabajamos en
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="marketing-impacto-copy-text06">
                contenido estratégico especializado y el marketing digital
              </span>
              <span>
                {' '}
                alineado a tu estrategia de marca.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="marketing-impacto-copy-text08"></br>
              <br className="marketing-impacto-copy-text09"></br>
              <span>
                Integrar la
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="marketing-impacto-copy-text11">
                Responsabilidad Social Corporativa
              </span>
              <span>
                {' '}
                en los servicios ofrecidos puede ayudar a la empresa a demostrar
                su compromiso con la sociedad, atraer a clientes y empleados
                conscientes y contribuir al bienestar general de la comunidad.
                Es fundamental que estas iniciativas sean genuinas y
                consistentes, y no simplemente una estrategia de marketing
                superficial.
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="marketing-impacto-copy-mosaic-component1">
          <div className="marketing-impacto-copy-container4">
            <span className="marketing-impacto-copy-text14 Subsubheading">
              <span className="marketing-impacto-copy-text15">
                Nuestros servicios adhoc:
              </span>
              <br></br>
            </span>
            <ul className="marketing-impacto-copy-ul list">
              <li className="marketing-impacto-copy-li list-item Content">
                <span className="marketing-impacto-copy-text17">
                  <span className="marketing-impacto-copy-text18">
                    Estrategias
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    de Marketing y Marketing de Contenidos con enfoque social.
                  </span>
                </span>
              </li>
              <li className="marketing-impacto-copy-li1 list-item">
                <span className="Content">
                  <span className="marketing-impacto-copy-text21">
                    Corporate Influencers:
                  </span>
                  <span> Promoción de mensajes responsables.</span>
                </span>
              </li>
              <li className="marketing-impacto-copy-li2 list-item Content">
                <span className="marketing-impacto-copy-text23">
                  <span className="marketing-impacto-copy-text24">
                    Publicidad responsable
                  </span>
                  <span>: Paid Media: Google, LinkedIn, Meta y TikTok.</span>
                  <br></br>
                </span>
              </li>
              <li className="marketing-impacto-copy-li3 list-item">
                <span className="Content">
                  <span className="marketing-impacto-copy-text28">SEO</span>
                  <span>
                    {' '}
                    y Marketing de Contenidos informativos.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </li>
              <li className="marketing-impacto-copy-li4 list-item">
                <span className="Content">
                  <span className="marketing-impacto-copy-text32">
                    Branding
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>con propósito.</span>
                  <br></br>
                </span>
              </li>
              <li className="marketing-impacto-copy-li5 list-item">
                <span className="Content">
                  <span className="marketing-impacto-copy-text36">
                    Creación de contenidos
                  </span>
                  <span>
                    {' '}
                    para RR.SS. consciente.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </li>
              <li className="marketing-impacto-copy-li6 list-item">
                <span className="Content">
                  <span className="marketing-impacto-copy-text40">
                    Copywriting responsable.
                  </span>
                  <br></br>
                </span>
              </li>
              <li className="marketing-impacto-copy-li7 list-item">
                <span className="Content">
                  <span className="marketing-impacto-copy-text43">
                    Creación de contenido audiovisual:
                  </span>
                  <span> Vídeos de acciones.</span>
                  <br></br>
                </span>
              </li>
            </ul>
          </div>
          <div className="marketing-impacto-copy-container5"></div>
        </div>
      </div>
      <VideosContainer rootClassName="videos-container-root-class-name"></VideosContainer>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  )
}

MarketingImpactoCopy.defaultProps = {
  heading: 'Marketing de impacto',
  rootClassName: '',
  subheading:
    'Ayudamos a empresas a posicionarse, a través del contenido y plan de medios estratégicos, en línea con la RSC.',
}

MarketingImpactoCopy.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  subheading: PropTypes.string,
}

export default MarketingImpactoCopy
