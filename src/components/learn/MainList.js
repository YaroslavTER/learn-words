import React, { Component } from "react";
import "../../styles/App.css";
import { Section } from "./Section";
import { HideButton } from "./HideButton";

export class MainList extends Component {
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
        },
        {
          word: "domain",
          translation:
            "(предметна) область, контекст (середовище, в якому повинна працювати програма)"
        }
      ]
    }
  ];

  constructor(props) {
    super(props);

    this.state = {
      sections: [],
      isHide: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fillSections();
  }

  handleClick() {
    let reverseIsHide = !this.state.isHide;
    this.setState({ isHide: reverseIsHide }, () => {
      this.fillSections();
    });
  }

  fillSections() {
    let sections = this.learningList.map((section, i) => {
      return (
        <Section
          key={i + section.name}
          sectionName={section.name}
          words={section.words}
          isHide={this.state.isHide}
        />
      );
    });
    this.setState({ sections: sections });
  }

  render() {
    return (
      <div>
        <div className="container learning-list mt-3">
          {this.state.sections}
        </div>
        <HideButton onClick={this.handleClick} />
      </div>
    );
  }
}
