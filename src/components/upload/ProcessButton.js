import React, { Component } from "react";
import "../../styles/App.css";

export class ProcessButton extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn btn-dark mt-2"
        onClick={this.props.onClick}
      >
        Process
      </button>
    );
  }
}
