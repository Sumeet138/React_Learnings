function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.childer;
  /*domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  mainContainer.appendChild(domElement);
  */
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.append(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "http://gogle.com",
    target: "_blank",
  },
  childer: "Click me to vist Google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
