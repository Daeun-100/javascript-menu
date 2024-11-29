const { SAMPLE } = require("../Constants.js");
exports.getMenuArr = function (category) {
  const menuString = SAMPLE[category];
  const menuArr = menuString.split(",");
  return menuArr;
};
