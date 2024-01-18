import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("render a code", () => {
    render(<Home />);

    const codeBlock = screen.getByTestId("codeBlock");

    expect(codeBlock).toBeInTheDocument();
  });
});