import { generateUniqueString, shortenedUrl } from "@/lib/url";

describe("Shortened URL", () => {
  it("Returns empty string when receiving empty params", () => {
    expect(shortenedUrl()).toBe("");
  });
});

describe("String Generator", () => {
  it("Returns a string with 8 characters", () => {
    const str = generateUniqueString();
    expect(str.length).toBe(8);
  });

  it("Returns true when 2 generated strings are different", () => {
    const str1 = generateUniqueString();
    const str2 = generateUniqueString();
    expect(str1).not.toBe(str2);
  });
});
