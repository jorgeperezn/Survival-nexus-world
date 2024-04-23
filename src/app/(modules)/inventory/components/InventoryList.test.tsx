import { InventoryList } from "./InventoryList";

import { render, screen, fireEvent } from "@testing-library/react";
import { mockedSurvivors } from "@/services/survivors";

import "@testing-library/jest-dom";
import { mockedItems } from "@/services/items";

jest.mock("@/app/components/avatar", () => ({
  Avatar: () => <div data-testid="avatar-mock"></div>,
}));

describe("InventoryList", () => {
  it("renders the list of survivors with their inventories correctly", () => {
    render(<InventoryList survivors={mockedSurvivors} items={mockedItems} />);

    // Check if each survivor's name and their inventories are rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("3 Water, 4 Food")).toBeInTheDocument();

    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("2 Food, 4 Medication")).toBeInTheDocument();
  });

  it('renders the "Request Items" button for each survivor', () => {
    render(<InventoryList survivors={mockedSurvivors} items={mockedItems} />);

    const requestItemsBtns = screen.getAllByText("Request Items");
    expect(requestItemsBtns).toHaveLength(mockedSurvivors.length);
  });

  it("displays the correct number of inventories logged", () => {
    render(<InventoryList survivors={mockedSurvivors} items={mockedItems} />);

    expect(
      screen.getByText("You have 13 inventories logged")
    ).toBeInTheDocument();
  });

  it('opens the request item modal when "Request Items" button is clicked', () => {
    render(<InventoryList survivors={mockedSurvivors} items={mockedItems} />);

    const requestItemsBtns = screen.getAllByText("Request Items");
    fireEvent.click(requestItemsBtns[0]);

    expect(screen.getByText("From John Doe")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose Item")).toBeInTheDocument();
  });

  // You can add more tests as needed, such as checking the total number of inventories logged, etc.
});
