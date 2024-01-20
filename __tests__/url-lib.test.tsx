import { isValidURL } from "@/lib/url";

describe("Shortened URL", () => {
  it("Returns TRUE when receiving valid string", () => {
    expect(isValidURL("x1QLX87P")).toBe(true);
  });
  it("Returns FALSE when receiving invalid string", () => {
    expect(isValidURL("x1QLX87&")).toBe(false);
  });
  it("Returns FALSE when receiving valid string but the length less than 8 characters", () => {
    expect(isValidURL("x1QLX8")).toBe(false);
  });
  it("Returns FALSE when receiving valid string but the length longer than 8 characters", () => {
    expect(isValidURL("x1QLX87Pfr")).toBe(false);
  });
});
