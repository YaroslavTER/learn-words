import React, { Component } from "react";
import "../../styles/App.css";
import { HideButton } from "./HideButton";
import { SectionList } from "./SectionList";
import { TextHandler } from "../../process/TextHandler";

export class MainList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHide: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let reverseIsHide = !this.state.isHide;
    this.setState({ isHide: reverseIsHide }, () => {
      console.log(this.state.isHide);
    });
  }

  render() {
    return (
      <div>
        {this.props.inputText}
        <div className="container learning-list mt-3">
          <SectionList
            inputList={TextHandler.convertTextToList(this.props.inputText)}
            isHide={this.state.ishide}
          />
        </div>
        <HideButton onClick={this.handleClick} />
      </div>
    );
  }
}
