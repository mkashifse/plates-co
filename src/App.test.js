import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("It should render App component", () => {
  render(<App />);
  const linkElement = screen.getByText(/Plates Co./i);
  expect(linkElement).toBeInTheDocument();
});

test("Basket: B01, B01 = $37.85", () => {
  render(<App />);
  const btnGreen = screen.getByTestId("G01");
  const btnBlue = screen.getByTestId("B01");
  const totalPrice = screen.getByTestId("totalPrice");

  expect(btnGreen).toBeInTheDocument();
  expect(btnBlue).toBeInTheDocument();
  expect(totalPrice).toBeInTheDocument();

  fireEvent.click(btnGreen);
  fireEvent.click(btnBlue);
  expect(screen.getByText("$37.85")).toBeInTheDocument();
});

test("Basket: R01, R01 = $54.37", () => {
  render(<App />);
  const btn1 = screen.getByTestId("R01");
  const totalPrice = screen.getByTestId("totalPrice");

  expect(btn1).toBeInTheDocument();
  expect(totalPrice).toBeInTheDocument();

  fireEvent.click(btn1);
  fireEvent.click(btn1);

  expect(screen.getByText("$54.37")).toBeInTheDocument();
});

test("Basket: R01, G01 = $60.85", () => {
  render(<App />);
  const btn1 = screen.getByTestId("R01");
  const btn2 = screen.getByTestId("G01");
  const totalPrice = screen.getByTestId("totalPrice");

  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
  expect(totalPrice).toBeInTheDocument();

  fireEvent.click(btn1);
  fireEvent.click(btn2);

  expect(screen.getByText("$60.85")).toBeInTheDocument();
});

test("Basket: B01, B01, R01, R01, R01 = $98.27", () => {
  render(<App />);
  const btn1 = screen.getByTestId("R01");
  const btn2 = screen.getByTestId("B01");
  const totalPrice = screen.getByTestId("totalPrice");

  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
  expect(totalPrice).toBeInTheDocument();

  fireEvent.click(btn2);
  fireEvent.click(btn2);
  fireEvent.click(btn1);
  fireEvent.click(btn1);
  fireEvent.click(btn1);

  expect(screen.getByText("$98.27")).toBeInTheDocument();
});
