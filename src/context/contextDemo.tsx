import React, { Component } from "react";
import { C0 } from "./contextC";
import { CContext } from "./cconetxt";



class C extends Component {
  render() {
    return (
      <div>
        <C0 />
      </div>
    );
  }
}

export class P extends Component {
  render() {
    CContext.displayName = "AbcContext";
    return (
      <CContext.Provider value={{ name: "Kevin" }}>
        <C />
      </CContext.Provider>
    );
  }
}
