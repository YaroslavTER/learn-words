import React, { Component } from "react";
import "../../styles/App.css";
import { MainList } from "../learn/MainList";
import { TextArea } from "../upload/TextArea";
import { ProcessButton } from "../upload/ProcessButton";

export class Panes extends Component {
  render() {
    return (
      <div>
        <div className="tab-content">
          <div id="upload" className="container tab-pane active">
            <TextArea />
            <ProcessButton />
          </div>
          <div id="learn" className="container tab-pane fade">
            <MainList />
          </div>
        </div>
      </div>
    );
  }
}
