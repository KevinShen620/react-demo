import React, { Component } from "react";
import { CContext } from "./cconetxt";

export class C0 extends Component {
  static contextType = CContext;
  render() {
    return <div>{this.context.name}</div>;
  }
}
