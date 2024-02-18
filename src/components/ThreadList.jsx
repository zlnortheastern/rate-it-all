import React, { Component } from "react";
import ThreadFragment from "./ThreadFragment";

export default class ThreadList extends Component {
  render() {
    return (
      <div>
        <ThreadFragment />
        <ThreadFragment />
        <ThreadFragment />
      </div>
    );
  }
}
