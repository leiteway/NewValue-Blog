import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './contactanos.css'

const Contactanos = (props) => {
  return (
    <div className="contactanos-container">
      <Helmet>
        <title>Contáctanos - New Value</title>
        <meta
          name="description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta property="og:title" content="Contáctanos - New Value" />
        <meta
          property="og:description"
          content="Consultoría ESG y Desarrollo de Proyectos con impacto. En New Value estamos comprometidos a generar un impacto significativo y contribuir a la transformación hacia un futuro sostenible."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1f3cf53e-4c4c-4d97-805a-f94dd20ef72f/ac29ac0a-98b0-455e-8c81-5dc8dac6e68c?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="contactanos-top-container">
        <Header></Header>
        <div className="contactanos-hero">
          <div className="contactanos-content-container">
            <h1 className="contactanos-text Heading">Contáctanos</h1>
            <div className="contactanos-mosaic-component">
              <form
                action="https://formsubmit.co/info@newvalue.es"
                method="POST"
                className="contactanos-form"
              >
                <input
                  type="text"
                  name="_honey"
                  className="input displaynone contactanos-textinput"
                />
                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                  className="input contactanos-textinput1"
                />
                <div className="contactanos-container01">
                  <div className="contactanos-container02">
                    <span className="contactanos-text1 boldcontent">
                      nombre
                    </span>
                    <input
                      type="text"
                      name="nombre"
                      required
                      className="contactanos-textinput2 input"
                    />
                  </div>
                  <div className="contactanos-container03">
                    <span className="contactanos-text2 boldcontent">
                      e-mail
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="contactanos-textinput3 input"
                    />
                  </div>
                  <div className="contactanos-container04">
                    <span className="contactanos-text3 boldcontent">
                      <span>teléfono</span>
                      <br></br>
                    </span>
                    <input
                      type="tel"
                      name="teléfono"
                      className="contactanos-textinput4 input"
                    />
                  </div>
                  <div className="contactanos-container05">
                    <div className="contactanos-container06">
                      <span className="contactanos-text6 boldcontent">
                        mensaje
                      </span>
                      <textarea
                        name="mensaje"
                        className="contactanos-textarea textarea"
                      ></textarea>
                    </div>
                  </div>
                  <div className="contactanos-container07">
                    <input
                      type="checkbox"
                      required
                      className="contactanos-checkbox"
                    />
                    <span className="contactanos-text7 boldcontent">
                      <span>
                        He leido y acepto la
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <Link
                        to="/politica-privacidad"
                        className="contactanos-navlink"
                      >
                        política de privacidad
                      </Link>
                    </span>
                  </div>
                  <div className="contactanos-container08">
                    <button
                      type="submit"
                      className="contactanos-button button button-green-trans shadow"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
              <div className="contactanos-container09"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default Contactanos
