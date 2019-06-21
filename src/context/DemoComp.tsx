import React, { Component } from "react";

export class Outter extends Component {
  render() {
    console.log("render outter");
    const rst = (
      <div>
        Outter
        <div>{this.props.children}</div>
      </div>
    );
    console.log("before returns");
    return rst;
  }
}

export class Inner extends Component {
  componentDidMount() {
    console.log("outter did mount");
  }
  
  render() {
    console.log("render inner");
    return (
      <div>
        <strong>Inner</strong>
      </div>
    );
  }
}

export class Demo extends Component {
  componentDidMount() {
    console.log("inner did mount");
  }
  render() {
    return (
      <Outter>
        <Inner />
      </Outter>
    );
  }
}
