import React, { Component } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "./styles.scss"

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <section>
          <div className="container">
            <div className="row">
              <div className="col j-center a-center f1">
                <div className="profile d-flex a-center">
                  <img
                    src="https://scontent.fsdu7-1.fna.fbcdn.net/v/t1.0-9/53473713_2117168208359847_7378393509721538560_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=qk2KydkUdOsAX_E2egx&_nc_ht=scontent.fsdu7-1.fna&oh=63941f5d86f89c3d8f1fabff6cc7b876&oe=5E98CE93"
                    alt="Christian Possidonio"
                  />

                  <ul>
                    <li>
                      <a href="">Linkedin</a>
                    </li>
                    <li>
                      <a href="">Github</a>
                    </li>
                    <li>
                      <a href="">Whatsapp</a>
                    </li>
                  </ul>
                </div>
                <div className="about">
                  <h2>
                    Sou um desenvolvedor, e há mais de 6 anos atuo com
                    desenvolvimento de diversas e variadas aplicações
                    participando estrategicamente de quase todas as etapas, indo
                    da concepção à implementação do sistema. Tenho facilidade
                    para trabalhar tanto com front-end quanto o back-end, sou
                    apaixonado por tecnologia e gosto de resolver os problemas
                    dos usuários.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}
