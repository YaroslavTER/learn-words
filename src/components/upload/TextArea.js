import React, { Component } from "react";
import "../../styles/App.css";

export class TextArea extends Component {
  render() {
    return (
      <div>
        <h3 className="mt-3">Copy/past text here</h3>
        <textarea
          className="form-control"
          rows="3"
          placeholder="b) nouns&#x0a; issue – проблема, питання"
        />
      </div>
    );
  }
}
