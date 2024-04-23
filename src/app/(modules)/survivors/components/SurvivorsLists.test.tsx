import { SurvivorList } from "./SurvivorsList";

import { render, screen, fireEvent } from "@testing-library/react";
import { mockedSurvivors } from "@/services/survivors";

import "@testing-library/jest-dom";

jest.mock("@/app/components/avatar", () => ({
  Avatar: () => <div data-testid="avatar-mock"></div>,
}));

describe("Survivors List", () => {
  it("renders the list of survivors correctly", () => {
    render(<SurvivorList survivors={mockedSurvivors} />);

    // Check if each survivor's name is rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();

    // Check if status badges are rendered correctly
    expect(screen.getByText("Healthy")).toBeInTheDocument();
    expect(screen.getByText("Infected")).toBeInTheDocument();

    // Check if date added is rendered correctly
    expect(screen.getByText("April 5, 2024")).toBeInTheDocument();
    expect(screen.getByText("April 6, 2024")).toBeInTheDocument();
  });

  it('renders the "Request Items" button for each survivor', () => {
    render(<SurvivorList survivors={mockedSurvivors} />);

    const requestItemsBtns = screen.getAllByText("Request Items");
    expect(requestItemsBtns).toHaveLength(mockedSurvivors.length);
  });

  it("displays the correct number of healthy survivors", () => {
    render(<SurvivorList survivors={mockedSurvivors} />);

    expect(
      screen.getByText("You have 1 healthy survivors")
    ).toBeInTheDocument();
  });

  it('opens the new survivor modal when "Add Survivor" button is clicked', () => {
    render(<SurvivorList survivors={mockedSurvivors} />);

    const addSurvivorBtn = screen.getByText("Add Survivor");
    fireEvent.click(addSurvivorBtn);

    expect(screen.getByLabelText("Full Name of Survivor")).toBeInTheDocument();
    expect(screen.getByLabelText("Status")).toBeInTheDocument();
  });
});
