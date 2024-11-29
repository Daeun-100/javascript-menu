const WeekScheduler = require("../src/WeekScheduler.js");
const { CATEGORY } = require("../src/Constants.js");
const MissionUtils = require("@woowacourse/mission-utils");
const { getMenuArr } = require("../src/utils/getMenuArr.js");
describe("weekscheduler 테스트", () => {
  const weekScheduler = new WeekScheduler();
  test("CATEGORY 잘 불러오는지 확인", () => {
    expect(CATEGORY[0] === "일식").toBeTruthy();
  });
  test("getCategory 테스트", () => {
    const category = weekScheduler.getCategory();
    expect(CATEGORY.includes(category)).toBeTruthy();
  });
  test("중복 2개 이상시 true 반환 테스트", () => {
    weekScheduler.weekCategories = "양식";
    weekScheduler.weekCategories = "양식";
    expect(weekScheduler.checkHasSameTwoCategory("양식")).toBeTruthy();
  });
  test("한주에 카테고리 2개 이상 중복 x", () => {
    for (let i = 0; i < 8; i++) {
      const tempCategory = weekScheduler.recommendCategory();
      weekScheduler.weekCategories = tempCategory;
    }

    expect(CATEGORY.includes(weekScheduler.weekCategories[1])).toBeTruthy();
  });
  test("getMenuArr", () => {
    const menuArr = getMenuArr("양식");
    expect(Array.isArray(menuArr)).toBeTruthy();
  });
  test("getMenu", () => {
    const menu = weekScheduler.getMenu("양식");
    expect(typeof menu).toBe("string");
  });
  test("Recommend 카테고리 테스트", () => {
    const newWeekScheduler = new WeekScheduler();
    const category = newWeekScheduler.recommendCategory();

    expect(category).toBeTruthy();
  });
});
