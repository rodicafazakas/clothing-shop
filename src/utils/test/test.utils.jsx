import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "../../store/root-reducer";

//https://redux.js.org/usage/writing-tests
export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = createStore(rootReducer, preloadedState),
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
