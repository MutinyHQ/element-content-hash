import { cleanHtml } from "../src/clean_html";

describe("cleanHtml", () => {
  describe("plain element", () => {
    it("returns the outer html and contents", () => {
      const el = document.createElement("p");
      el.appendChild(document.createTextNode("hello, world"));
      expect(cleanHtml(el.outerHTML)).toBe("<p>hello, world</p>");
    });
  });

  describe("with class names", () => {
    it("returns the outer html and contents", () => {
      const el = document.createElement("p");
      el.setAttribute("class", "my-classes");
      el.appendChild(document.createTextNode("hello, world"));
      expect(cleanHtml(el.outerHTML)).toBe("<p>hello, world</p>");
    });
  });

  describe("with data attributes", () => {
    it("returns the outer html and contents", () => {
      const contents = "<p data-123>hello, world</p>";
      expect(cleanHtml(contents)).toBe("<p>hello, world</p>");
    });
  });

  describe("nested elements", () => {
    it("returns the outer html and contents", () => {
      const el = document.createElement("p");
      el.setAttribute("class", "my-classes");

      const nestedEl = document.createElement("span");
      nestedEl.setAttribute("class", "my-other-classes");
      nestedEl.appendChild(document.createTextNode("hello, world"));
      el.appendChild(nestedEl);

      expect(cleanHtml(el.outerHTML)).toBe("<p><span>hello, world</span></p>");
    });
  });
});
