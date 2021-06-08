// import _ from "lodash";

// const component = () => {
//   const element = document.createElement("div");

//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   return element;
// };

// document.body.appendChild(component());

/** ****** SPLIT ****** */

// const getComponent = () => {
//   const element = document.createElement("div");

//   return import("lodash")
//     .then(({ default: _ }) => {
//       const element = document.createElement("div");

//       element.innerHTML = _.join(["Hello", "webpack"], " ");

//       return element;
//     })
//     .catch((error) => "An error occurred while loading the component");
// };

// getComponent.then((component) => {
//   document.body.appendChild(component);
// });

/** ****** SPLIT ****** */

const getComponent = async () => {
  const element = document.createElement("div");

  const { default: _ } = await import("lodash");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
};

getComponent.then((component) => {
  document.body.appendChild(component);
});
