import React from 'react';  // similar to using require;
import { render } from 'react-dom';
// { } only include pieces specified betwen the braces
const MyTitle = function(props) {
  // parameters -> parent element, attributes, child element
  // return ce(
  //   "div",
  //   null,
  //   ce("h1", { style: { color: props.color } }, props.title)
  // );
  // above is pre-babel;
  return (
    <div>
      <h1 style={ {color: props.color} }>{props.title}</h1>
    </div>
  );
};
const MyFirstComponent = function() {
  // example of nested component
  // multiple instances of myTitle
  // self-closing tags is part of jsx
  return <div id="my-first-component">
    <MyTitle title="Game of Thrones" color="YellowGreen" />
    <MyTitle title="Stranger Things" color="GreenYellow" />
    <MyTitle title="Rick and Morty" color="LimeGreen" />
    <MyTitle title="Silicon Valley" color="Lime" />
  </div>
};

render(<MyFirstComponent />, document.getElementById("app"));
