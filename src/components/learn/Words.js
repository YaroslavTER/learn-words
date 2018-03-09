import React, { Component } from "react";
import "../../styles/App.css";
import { Section } from "./Section";

export class Words extends Component {
  learningList = [
    {
      name: "a) terms",
      words: [
        {
          word: "prefomance",
          translation:
            "1) робота, функціонування; експлуатаційні властивості 2) ККД"
        },
        {
          word: "global control structure",
          translation: "структура глобального керування"
        },
        {
          word: "scaling",
          translation: "масштабування, масштабне перетворення"
        }
      ]
    },
    {
      name: "b) nouns",
      words: [
        {
          word: "issue",
          translation: "проблема, питання"
        },
        {
          word: "synchronization",
          translation: "синхронізація"
        },
        {
          word: "composition",
          translation: "1) склад  2) побудова, формування, утворення"
        }
      ]
    }
  ];

  constructor() {
    super();

    this.state = {
      sections: []
    };
  }

  componentDidMount() {
    let sections = this.learningList.map((section, i) => {
      return (
        <Section
          key={i + section.name}
          sectionName={section.name}
          words={section.words}
        />
      );
    });
    this.setState({ sections: sections });
  }

  render() {
    return (
      <div>
        <div className="learning-list">{this.state.sections}</div>
        <button onClick={this.handleClick}>Hide</button>
      </div>
    );
  }
}
