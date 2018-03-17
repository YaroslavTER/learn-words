import React, { Component } from "react";
import "../../styles/App.css";

export class TextArea extends Component {
  render() {
    return (
      <div>
        <textarea
          className="form-control"
          rows="3"
          placeholder="b) nouns&#x0a; issue – проблема, питання"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
