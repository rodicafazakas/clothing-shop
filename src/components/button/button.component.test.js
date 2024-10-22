import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Button from "./button.component";
import store from "../../store/store";

describe('button tests', () => {
  test('should render default button when nothing is passed', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Button />
        </BrowserRouter>
      </Provider>  
    )
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    //expect(buttonElement).toHaveStyle('background-color: black');
  })

  test('should render google button when passed google button type', () => {
    render(<Button buttonType='google'/>)

    const googleButtonElement = screen.getByRole('button');
    expect(googleButtonElement).toHaveClass('button--google');
    //expect(googleButtonElement).toHaveStyle('background-color: #4285f4');
  })

  test('should render inverted button when passed inverted button type', () => {
    render(<Button buttonType='inverted'/>)

    const invertedButtonElement = screen.getByRole('button');
    expect(invertedButtonElement).toHaveClass('button--inverted');
    //expect(googleButtonElement).toHaveStyle('background-color: white');
  })
})