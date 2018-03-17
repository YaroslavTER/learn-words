import React, { Component } from "react";
import "../../styles/App.css";
import { Section } from "./Section";

export class SectionList extends Component {
  fillSections(learningList) {
    let sections = learningList.map((section, i) => {
      return (
        <Section
          key={i + section.name}
          sectionName={section.name}
          words={section.words}
          isHide={this.props.isHide}
        />
      );
    });
    return sections;
  }

  render() {
    return <div>{this.fillSections(this.props.inputList)}</div>;
  }
}
