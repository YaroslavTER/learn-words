import React, { Component } from "react";
import "../../styles/App.css";

export class SectionsElement extends Component {
  render() {
    return (
      <div className="section-element">
        <div className="word">{this.props.word}</div>
        <div className="translation">{this.props.translation}</div>
      </div>
    );
  }
}
