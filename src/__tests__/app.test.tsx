import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
afterEach(() => {
  jest.restoreAllMocks();
});

describe("App tests", () => {
  test("shows empty cart message when no items are added", () => {
    render(<App />);
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });
  test("increments product quantity when added multiple times", () => {
    render(<App />);

    // Add the same product twice
    const addToCartButton = screen.getAllByText(/Add to Cart/i)[0];
    fireEvent.click(addToCartButton);
    fireEvent.click(addToCartButton);

    // Verify product quantity in the cart
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
describe("Cart tests", () => {
  test("calculates total price correctly", () => {
    render(<App />);

    // Add two products to the cart
    const addToCartButtons = screen.getAllByText(/Add to Cart/i);
    fireEvent.click(addToCartButtons[0]); // Laptop
    fireEvent.click(addToCartButtons[1]); // Phone

    // Verify the total price
    expect(screen.getByText(/Total: \$1800/i)).toBeInTheDocument();
  });
});

