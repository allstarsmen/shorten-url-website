import Home from "@/app/page";
import { shortenUrl } from "@/utils/url";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("render a code", () => {
    render(<Home />);

    const codeBlock = screen.getByTestId("codeBlock");

    expect(codeBlock).toBeInTheDocument();
  });

  it("returns empty string when receiving a null param", () => {
    const expected = "";
    const actual = shortenUrl();

    expect(actual).toBe(expected);
  });
});
