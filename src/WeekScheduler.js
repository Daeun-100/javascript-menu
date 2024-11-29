const { Console, Random } = require("@woowacourse/mission-utils");
const { CATEGORY } = require("../src/Constants.js");
const { getMenuArr } = require("./utils/getMenuArr.js");
const Coach = require("./Coach.js");
class WeekScheduler {
  #weekCategories = [];
  #coaches = {};

  constructor() {}
  set coaches(coach) {
    const name = coach.name;
    this.#coaches[name] = coach;
  }
  get coaches() {
    return this.#coaches;
  }
  get weekCategories() {
    return this.#weekCategories;
  }
  checkHasSameTwoCategory(tempCategory) {
    const sameCategoryArr = this.#weekCategories.filter(
      (category) => category === tempCategory
    );

    if (sameCategoryArr.length >= 2) {
      return true;
    }
    return false;
  }
  recommendFive() {
    for (let i = 0; i < 5; i++) {
      const category = this.recommendCategory();

      this.#weekCategories.push(category);

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
    Object.keys(this.#coaches).forEach((coach) => {
      do {
        tempMenu = this.getMenu(category);
      } while (
        this.#coaches[coach].checkHaseSameMenu(tempMenu) ||
        this.#coaches[coach].checkCanEat(tempMenu)
      );
      //menu 에 push
      this.#coaches[coach].menu = tempMenu;
    });
  }
  set weekCategories(category) {
    this.#weekCategories.push(category);
  }
  get weekCategories() {
    return this.#weekCategories;
  }
  getCategory() {
    const index = Random.pickNumberInRange(1, 5);
    const newIndex = index - 1;
    return CATEGORY[newIndex];
  }

  getMenu(category) {
    const menus = getMenuArr(category);
    const indexNumberArr = menus.map((menu, index) => index);
    Console.print(indexNumberArr);
    const shuffleindex = Random.shuffle(indexNumberArr);
    Console.print(shuffleindex);
    const firstIndex = shuffleindex[0];
    Console.print(menus[firstIndex]);
    return menus[firstIndex - 1];
  }
}

module.exports = WeekScheduler;
