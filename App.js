import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello h1 tag"),
    React.createElement("h2", {}, "Hello h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello h1 tag"),
    React.createElement("h2", {}, "Hello h2 tag"),
  ]),
]);


// CreateElement takes 3 arguments 1. element name 2.props or attributes 3. children
// if you want to create multiple children then pass them in array

//jsx comes place jsx our life easy to write code in react  and jsx is a syntactic sugar for react.createElement method  and jsx is a javascript extension and it is not a html

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
