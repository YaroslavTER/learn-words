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
    this.setState({ isHide: reverseIsHide });
  }

  render() {
    return (
      <div>
        <div className="container learning-list mt-2 mb-5">
          <SectionList
            inputList={TextHandler.convertTextToList(this.props.inputText)}
            isHide={this.state.isHide}
          />
        </div>
        <HideButton onClick={this.handleClick} />
      </div>
    );
  }
}
