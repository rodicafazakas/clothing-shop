import { render, screen } from "@testing-library/react";
import { Button } from "../button.component";

describe("Button tests", () => {
  it("should render base button when base button type is passed", () => {
    render(<Button buttonType="base" />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn--base");
    //expect(buttonElement).toHaveStyle("background-color: black");
  });

  it("should render google button when passed google button type", () => {
    render(<Button buttonType="google" />);

    const googleButtonElement = screen.getByRole("button");
    expect(googleButtonElement).toHaveClass("btn--google");
    //expect(googleButtonElement).toHaveStyle("background-color: #4285f4");
  });

  it("should render inverted button when passed inverted button type", () => {
    render(<Button buttonType="inverted" />);

    const invertedButtonElement = screen.getByRole("button");
    expect(invertedButtonElement).toHaveClass("btn--inverted");
    //expect(invertedButtonElement).toHaveStyle("background-color: white");
  });
});
