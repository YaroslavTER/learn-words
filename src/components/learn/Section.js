import React, { Component } from "react";
import "../../styles/App.css";
import { WordList } from "./WordList";

export class Section extends Component {
  render() {
    return (
      <div className="section container section mb-2 rounded">
        <div className="section-name mb-2 rounded-bottom d-flex justify-content-center">
          {this.props.sectionName}
        </div>
        <WordList words={this.props.words} isHide={this.props.isHide} />
      </div>
    );
  }
}
