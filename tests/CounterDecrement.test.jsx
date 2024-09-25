import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterDecrement from "../src/components/CounterDecrement";

test("renders with initial value of 0 ", () => {
    render(<CounterDecrement />); 
    expect(screen.getByRole("heading")).toHaveTextContent("0");
});

test("render a new value of -2", async () => {
    render(<CounterDecrement />);
    await userEvent.click(screen.getByText("Decrement!"));
    await userEvent.click(screen.getByText("Decrement!"));
    expect(screen.getByRole("heading")).toHaveTextContent("-2");
});

test("render a new value of -5", async () => {
    render(<CounterDecrement />);
    await userEvent.click(screen.getByText("Decrement!"));
    await userEvent.click(screen.getByText("Decrement!"));
    await userEvent.click(screen.getByText("Decrement!"));
    await userEvent.click(screen.getByText("Decrement!"));
    await userEvent.click(screen.getByText("Decrement!"));
    expect(screen.getByRole("heading")).toHaveTextContent("-5");
});