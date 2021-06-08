import _ from "lodash";
import "./style.css";
import Icon from "./webpack.svg";
import xml from "./data.xml";
import csv from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json5 from "./data.json5";

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json5.title); // output `JSON5 Example`
console.log(json5.owner.name); // output `Tom Preston-Werner`

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(xml);
  console.log(csv);

  return element;
};

document.body.appendChild(component());
