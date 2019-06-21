import React, { Component } from "react";
import { DispatchProp } from "react-redux";
import {
  getFirstNameAction,
  getLastNameAction,
  StoreState,
  NameState
} from "./model";
import { connect } from "dva";

class Name extends Component<NameState & DispatchProp> {
  static count: number = 0;

  render() {
    console.log("render ", Name.count);

    return (
      <div>
        this is name:
        <span>{this.props.firstName}</span>
        <span>{this.props.lastName}</span>
        <div>
          <span>render times </span>
          <span>{++Name.count}</span>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getFirstNameAction());
    this.props.dispatch(getLastNameAction());
  }
}

const CName = connect((state: StoreState, ownProps: any) => {
  return state.test;
})(Name);
export { CName as Name };
