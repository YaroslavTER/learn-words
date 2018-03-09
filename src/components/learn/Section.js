import React, { Component } from "react";
import "../../styles/App.css";
import { SectionsElement } from "./SectionsElement";

export class Section extends Component {
  constructor() {
    super();

    this.state = {
      words: []
    };
  }

  componentDidMount() {
    let words = this.props.words.map((element, i) => {
      return (
        <SectionsElement
          key={i + element.word}
          word={element.word}
          translation={element.translation}
        />
      );
    });
    this.setState({ words: words });
  }

  render() {
    return (
      <div className="section">
        <div className="section-name">{this.props.sectionName}</div>
        {this.state.words}
      </div>
    );
  }
}
