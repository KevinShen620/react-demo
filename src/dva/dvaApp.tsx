/**
 * 测试 dispath 次数和渲染次数关系
 */

import { dvaInstance } from "./model";
import { RouterAPI } from "dva";
import { Route, Switch, Router } from "react-router-dom";
import { Name } from "./name";
import React, { Component } from "react";
dvaInstance.router((api?: RouterAPI) => {
  if (!api) {
    return {};
  }
  const _api: RouterAPI = api;
  return (
    <div>
      this is dva test
      <Router history={_api.history}>
        <Switch>
          <Route component={Name} path="/" exact={true} />
        </Switch>
      </Router>
    </div>
  );
});
// const DvaApp = dvaInstance.start();
class DvaApp extends Component {
  render() {
    return dvaInstance.start()();
  }
}

export { DvaApp };
