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
    let length = this.props.words.length;
    let words = this.props.words.map((element, i) => {
      let isEven = i % 2 !== 0;
      let isLast = i === length - 1;

      return (
        <SectionsElement
          key={i + element.word}
          word={element.word}
          translation={element.translation}
          isEven={isEven}
          isLast={isLast}
        />
      );
    });
    this.setState({ words: words });
  }

  render() {
    return (
      <div className="section container section mb-2 rounded">
        <div className="section-name mb-2 rounded-bottom d-flex justify-content-center">
          {this.props.sectionName}
        </div>
        {this.state.words}
      </div>
    );
  }
}
