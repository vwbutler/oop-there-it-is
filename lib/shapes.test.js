// shapes.test.js

const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("render() method should return the correct SVG string for Triangle", () => {
    const triangle = new Triangle("blue");
    const svgString = triangle.render();
    expect(svgString).toEqual(
      '<polygon points="150,18 244,182 56,182" fill="blue" />'
    );
  });
});

describe("Circle", () => {
  test("render() method should return the correct SVG string for Circle", () => {
    const circle = new Circle("red");
    const svgString = circle.render();
    expect(svgString).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe("Square", () => {
  test("render() method should return the correct SVG string for Square", () => {
    const square = new Square("green");
    const svgString = square.render();
    expect(svgString).toEqual(
      '<rect x="50" y="50" width="200" height="200" fill="green" />'
    );
  });
});
