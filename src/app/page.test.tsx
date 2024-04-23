import Home from "./page";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("Home page", () => {
  it("renders the home page modules", () => {
    render(<Home />);

    expect(screen.getByText("Reports")).toBeInTheDocument();
    expect(screen.getByText("Survivors")).toBeInTheDocument();
    expect(screen.getByText("Inventory")).toBeInTheDocument();
  });
});
