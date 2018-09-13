import elementContentHash from "../src";

describe("element-content-hash", () => {
  describe("img element", () => {
    it("hashes the src", () => {
      const img = document.createElement("img");
      img.setAttribute("src", "https://image.com/img.png");
      img.setAttribute("class", "image-class");
      expect(elementContentHash(img)).toBe("142140398");
    });

    it("hashes the src", () => {
      const img = document.createElement("img");
      img.setAttribute("src", "https://image.com/img.png");
      expect(elementContentHash(img)).toBe("142140398");
    });
  });

  describe("div element", () => {
    describe("with no children", () => {
      it("hashes the entire contents, minus attributes", () => {
        const div = document.createElement("div");
        div.setAttribute("class", "my-div-class");
        expect(elementContentHash(div)).toBe("1024510217");
      });

      it("hashes the entire contents, minus attributes", () => {
        const div = document.createElement("div");
        div.setAttribute("class", "my-div-class");
        div.setAttribute("data-123", "my-data-attribute");
        expect(elementContentHash(div)).toBe("1024510217");
      });
    });

    describe("with children", () => {
      it("hashes the entire contents, minus attributes", () => {
        const div = document.createElement("div");
        div.setAttribute("class", "my-div-class");
        div.appendChild(document.createTextNode("hello, world"));
        expect(elementContentHash(div)).toBe("1634983957");
      });

      it("hashes the entire contents, minus attributes", () => {
        const div = document.createElement("div");
        div.setAttribute("class", "my-div-class");
        const innerDiv = document.createElement("div");
        innerDiv.appendChild(document.createTextNode("hello, world"));
        div.appendChild(innerDiv);
        expect(elementContentHash(div)).toBe("-1749657428");
      });

      it("hashes the entire contents, minus attributes", () => {
        const div = document.createElement("div");
        div.setAttribute("class", "my-div-class");
        const innerDiv = document.createElement("div");
        innerDiv.appendChild(document.createTextNode("hello, world"));
        innerDiv.setAttribute("class", "my-inner-div-class");
        div.appendChild(innerDiv);
        expect(elementContentHash(div)).toBe("-1749657428");
      });
    });
  });
});
