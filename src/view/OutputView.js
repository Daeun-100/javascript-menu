const { Console } = require("@woowacourse/mission-utils");

class OutputView {
  static printStart() {
    Console.print("점심 메뉴 추천을 시작합니다");
  }
  static printResult(coaches, weekCategories) {
    Console.print("메뉴 추천 결과입니다.");
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
    //각 코치 객체에서 출력
    const categoryString = "[카테고리 | " + weekCategories.join(" | ") + "]";
    Console.print(categoryString);
    Object.keys(coaches).forEach((coachNanme) => {
      Console.print(coaches[coachNanme].toPrintString());
    });
    Console.print("추천을 완료했습니다");
  }
}

module.exports = OutputView;
