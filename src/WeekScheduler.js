const MissionUtils = require("@woowacourse/mission-utils");
const { CATEGORY } = require("../src/Constants.js");
class WeekScheduler {
  #weekCategories = [];

  constructor() {}
  checkHasSameTwoCategory(tempCategory) {
    const sameCategoryArr = this.#weekCategories.filter(
      (category) => category === tempCategory
    );
    MissionUtils.Console.print(this.#weekCategories);
    MissionUtils.Console.print(sameCategoryArr);
    if (sameCategoryArr.length >= 2) {
      return true;
    }
    return false;
  }
  recommendCategory() {
    let tempCategory;
    do {
      tempCategory = this.getCategory();
    } while (this.checkHasSameTwoCategory(tempCategory));
    this.#weekCategories.push(tempCategory);
    return tempCategory;
  }
  set weekCategories(category) {
    this.#weekCategories.push(category);
  }
  get weekCategories() {
    return this.#weekCategories;
  }
  getCategory() {
    const index = MissionUtils.Random.pickNumberInRange(0, 4);
    return CATEGORY[index];
  }
}

module.exports = WeekScheduler;
