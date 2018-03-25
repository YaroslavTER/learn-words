import React, { Component } from "react";
import "../../styles/App.css";

export class Tabs extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-pills mt-2" role="tablist">
          <li className="nav-item qwerty">
            <a className="nav-link active" data-toggle="pill" href="#upload">
              Upload
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#learn">
              Learn
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
