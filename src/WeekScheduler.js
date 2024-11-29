const MissionUtils = require("@woowacourse/mission-utils");
const { CATEGORY } = require("../src/Constants.js");
const getMenuArr = require("./utils/getMenuArr.js");
const Coach = require("./Coach.js");
class WeekScheduler {
  #weekCategories = [];
  #coach = {};

  constructor() {}
  set coach(coach) {
    const name = coach.name;
    this.#coach[name] = coach;
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
  recommendFive() {
    for (let i = 0; i < 5; i++) {
      const category = this.recommendCategory();
      this.recommendMenu(category);
    }
    //각 코치객체에 메뉴에 5개가 저장되어야함
  }
  //카테고리 추천
  recommendCategory() {
    let tempCategory;
    do {
      tempCategory = this.getCategory();
    } while (this.checkHasSameTwoCategory(tempCategory));
    // this.#weekCategories.push(tempCategory); 다른데서
    return tempCategory;
  }
  //각 코치 메뉴 추천/ coach의 this.#menu에 저장
  recommendMenu(category) {
    let tempMenu;
    Object.keys(this.#coach).forEach((coach) => {
      do {
        tempMenu = this.getMenu(category);
      } while (
        coach.checkHaseSameMenu(tempMenu) ||
        coach.checkCanEat(tempMenu)
      );
      //menu 에 push
      coach.menu = tempMenu;
    });
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
