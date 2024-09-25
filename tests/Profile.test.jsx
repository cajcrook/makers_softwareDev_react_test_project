// file: src/Profile.test.jsx

import { render, screen } from "@testing-library/react";
import Profile from "../src/components/Profile";

test("renders with the correct title ", () => {
  // Setup - rendering the component on the page
  render(< Profile name="Quackie Makers" />);
  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("Quackie Makers");
});


test("renders with the correct job ", () => {
  render(< Profile job="Makers' favourite rubber duck" />);
  expect(screen.getByText("Makers' favourite rubber duck")).toBeInTheDocument();
});


test("renders with the correct birthdate", () => {
  render(<Profile birthdate="2013" />);
  expect(screen.getByText("2013")).toBeInTheDocument();
});

