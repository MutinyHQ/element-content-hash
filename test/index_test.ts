import elementContentHash from "../src";

describe("element-content-hash", () => {
  it("returns a string", () => {
    expect(typeof elementContentHash()).toBe("string");
  });
});
