import _ from "lodash";
import print from "./print";

const component = () => {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.onclick = print.bind(null, "Hello webpack!");

  return element;
};

document.body.appendChild(component());
