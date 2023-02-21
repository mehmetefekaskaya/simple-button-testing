// import { logRoles } from '@testing-library/react';
import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpace } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(buttonElement).toHaveStyle({ "background-color": "MediumViolentRed" });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle("background-color: MidnightBlue");
});

test("button color should be gray when checkbox is checked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toHaveStyle({ "background-color": "gray" });
  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: "MediumViolentRed" });
});

test("click button and then checkbox, test button color respoectively", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: "MidnightBlue" });
  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveStyle({ "background-color": "gray" });
  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: "MidnightBlue" });
});
