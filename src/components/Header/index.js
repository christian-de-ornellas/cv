import React, { Component } from "react"
import "./styles.scss"
export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <div className="row j-space-between">
              <div className="col">
                <div className="brand">
                  <h1>Christian Possidonio</h1>
                </div>
              </div>
              <div className="col">
                <nav>
                  <ul>
                    <li>Sobre</li>
                    <li>Habilidades</li>
                    <li>Experiências</li>
                    <li>Educação</li>
                    <li>Baixar Currículo</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
