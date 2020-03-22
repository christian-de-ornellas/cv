import React, { Component } from "react"
import "./styles.scss"

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="row j-center a-center">
              <div className="col ">
                <p>&copy; Christian Possidonio | 2020</p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}
