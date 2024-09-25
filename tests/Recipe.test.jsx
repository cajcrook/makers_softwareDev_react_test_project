
import { render, screen } from "@testing-library/react";
import Recipe from "../src/components/Recipe";

test("title - renders correctly", () => {
    render(<Recipe title = "Finnish cinnamon buns"/>);
    expect(screen.getByRole("heading")).toHaveTextContent("Finnish cinnamon buns");
});

test("type - renders correctly", () => {
    render(<Recipe type = "dessert"/>);
    expect(screen.getByText("dessert")).toBeInTheDocument();
});

test("duration - renders correctly", () => {
    render(<Recipe duration = "60"/>);
    expect(screen.getByText("60")).toBeInTheDocument();
});