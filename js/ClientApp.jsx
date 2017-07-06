const ce = React.createElement;

const myTitle = function(props) {
  // parameters -> parent element, attributes, child element
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};
const MyFirstComponent = function() {
  // example of nested component
  //multiple instances of myTitle
  return ce(
    "div",
    { id: "my-first-component" },
    ce(myTitle, { title: "Game of Thrones", color: "YellowGreen" }),
    ce(myTitle, { title: "Stranger Things", color: "GreenYellow" }),
    ce(myTitle, { title: "Rick and Morty", color: "LimeGreen" }),
    ce(myTitle, { title: "Silicon Valley", color: "Lime" })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));
