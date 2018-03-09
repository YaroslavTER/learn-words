import React, { Component } from "react";
import "../../styles/App.css";

export class SectionsElement extends Component {
  render() {
    let sectionClassName = "section-element row";
    if (this.props.isEven) {
      sectionClassName += " even";
    }

    if (this.props.isLast) {
      sectionClassName += " rounded-bottom";
    }

    return (
      <div className={sectionClassName}>
        <div className="word col-md-3">{this.props.word}</div>
        <div className="translation col-md-9">{this.props.translation}</div>
      </div>
    );
  }
}
