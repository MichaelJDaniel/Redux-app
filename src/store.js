import { createStore, compose, } from "redux";


import rootReducer from "./reducers/index";

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, { }, enhancers);

if(module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReucer = require("./reducers/index").default;
    store.replaceReducer(nextRootReucer)
  })
}

export default store;