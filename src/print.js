import { resetGame } from "./utils.js";

const createRestartButton = () => {
  const buttonNode = document.createElement("button");
  buttonNode.innerText = "재시작";
  buttonNode.addEventListener("click", resetGame);

  return buttonNode;
};

const printLength = (count) => {
  let returnString = "";

  for (let i = 0; i < count; i++) {
    returnString += "-";
  }

  return returnString;
};
