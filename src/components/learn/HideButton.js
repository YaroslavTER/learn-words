import React, { Component } from "react";
import "../../styles/App.css";

export class HideButton extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm fixed-bottom d-flex justify-content-center">
          <button type="button" className="btn btn-dark">
            Hide
          </button>
        </nav>
      </div>
    );
  }
}
