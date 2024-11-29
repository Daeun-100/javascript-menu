const MissionUtils = require("@woowacourse/mission-utils");
const { CATEGORY } = require("../src/Constants.js");
const getMenuArr = require("./utils/getMenuArr.js");
class WeekScheduler {
  #weekCategories = [];
  #coachWithMenu = {};
  //코치이름 : {월:,화:,수 :,...}
  constructor(namesArr) {
    namesArr.forEach((name) => {
      this.#coachWithMenu[name] = {
        월: null,
        화: null,
        수: null,
        목: null,
        금: null,
      };
    });
  }
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
  checkHaseSameMenu(menu, coach) {
    const check = Object.keys(this.#coachWithMenu[coach]).some(
      (key) => this.#coachWithMenu[coach][key] == menu
    );
    return check;
  }
  recommendCategory() {
    let tempCategory;
    do {
      tempCategory = this.getCategory();
    } while (this.checkHasSameTwoCategory(tempCategory));
    // this.#weekCategories.push(tempCategory); 다른데서
    return tempCategory;
  }
  recommendMenu(category, coach) {
    let tempMenu;
    do {
      tempMenu = this.getMenu(category);
    } while (this.checkHaseSameMenu(tempMenu, coach));
    return tempMenu;
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

  getMenu(category) {
    const menus = getMenuArr(category);
    const menu = Random.shuffle(menus)[0];
    return menu;
  }
}

module.exports = WeekScheduler;
