import React, { Component } from "react";
import "../../styles/App.css";

export class UploadHeader extends Component {
  render() {
    return <h3 className="mt-3">{this.props.value}</h3>;
  }
}
