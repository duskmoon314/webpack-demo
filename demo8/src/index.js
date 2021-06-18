import _ from "lodash";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack", process.env.testStr], " ");

  return element;
};

document.body.appendChild(component());
