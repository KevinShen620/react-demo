import dva, { Model, RouterAPI } from "dva";
import { Action } from "redux";

export interface NameState {
  firstName: string;
  lastName: string;
}
export interface StoreState {
  test: NameState;
}

export function getNameAction() {
  return {
    type: "test/getName"
  };
}
export function getFirstNameAction(): Action {
  return {
    type: "test/getFirstName"
  };
}

export function getLastNameAction(): Action {
  return {
    type: "test/getLastName"
  };
}

const model: Model = {
  namespace: "test",
  state: {},
  reducers: {
    getName(state = {}, {}) {
      return Object.assign({}, state, {
        firstName: "Kevin",
        lastName: "Shen"
      });
    },

    getFirstName(state = {}, {}) {
      return Object.assign({}, state, {
        firstName: "Kevin"
      });
    },

    getLastName(state = {}, {}) {
      return Object.assign({}, state, { lastName: "Shen" });
    }
  }
};

export { model };

const dvaInstance = dva({
  initialState: {}
});

dvaInstance.model(model);
export { dvaInstance };
