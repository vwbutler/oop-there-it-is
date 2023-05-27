const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes.js");

const questions = [
  //prompts for users to enter the text, text color, shape and shape color
  {
    type: "input",
    name: "text",
    message: "Enter the text for the logo (up to three characters):",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color (keyword or hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color (keyword or hexadecimal number):",
  },
];

inquirer.prompt(questions).then((answers) => {
  //get the answers provided by the user
  const text = answers.text;
  const textColor = answers.textColor;
  const shape = answers.shape;
  const shapeColor = answers.shapeColor;

  let shapeInstance;
  //create the selected shape
  if (shape === "circle") {
    shapeInstance = new Circle();
  } else if (shape === "triangle") {
    shapeInstance = new Triangle();
  } else if (shape === "square") {
    shapeInstance = new Square();
  }
  //set the shape color
  shapeInstance.setColor(shapeColor);

  //create the svg
  const logoSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <text x="150" y="100" text-anchor="middle" fill="${textColor}">${text}</text>
  ${shapeInstance.render()}
  </svg>`;

  //write the svg to a file named logo.svg
  const fs = require("fs");
  fs.writeFile("./examples/logo.svg", logoSVG, (err) => {
    if (err) {
      console.error("Error saving the logo:", err);
    } else {
      console.log("Generated logo.svg");
    }
  });
});
