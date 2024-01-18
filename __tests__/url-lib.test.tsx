import { shortenedUrl } from "@/lib/url";

describe("Shortened URL", () => {
  it("Returns empty string when receiving empty params", () => {
    expect(shortenedUrl()).toBe("");
  });
});
