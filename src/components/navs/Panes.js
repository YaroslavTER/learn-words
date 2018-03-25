import React, { Component } from "react";
import "../../styles/App.css";
import { MainList } from "../learn/MainList";
import { TextArea } from "../upload/TextArea";
import { ProcessButton } from "../upload/ProcessButton";
import { UploadHeader } from "../upload/UploadHeader";

export class Panes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="tab-content">
          <div id="upload" className="container tab-pane active">
            <UploadHeader value="Input or copy/past text here" />
            <TextArea value={this.state.value} onChange={this.handleChange} />
          </div>
          <div id="learn" className="container tab-pane fade">
            <MainList inputText={this.state.value} />
          </div>
        </div>
      </div>
    );
  }
}
