const heading = React.createElement(
  "h1",
  { id: "head_text" },
  "Learning React by Namaste React Course"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello from child1 H1 tag"),
    React.createElement("h2", {}, "Hello from child1 H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from child2 H1 tag"),
    React.createElement("h2", {}, "Hello from child2 H2 Tag"),
  ]),
]);

root.render(parent);
