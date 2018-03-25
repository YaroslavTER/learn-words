import React, { Component } from "react";
import { SectionsElement } from "./SectionsElement";

export class WordList extends Component {
  fillSection() {
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
          isHide={this.props.isHide}
        />
      );
    });
    return words;
  }

  render() {
    return <div>{this.fillSection()}</div>;
  }
}
