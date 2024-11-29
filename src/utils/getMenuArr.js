const { SAMPLE } = require("../Constants.js");
function getMenuArr(category) {
  const menuString = SAMPLE[category];
  const menuArr = menuString.split(",");
  return menuArr;
}

exports.modules = getMenuArr;
