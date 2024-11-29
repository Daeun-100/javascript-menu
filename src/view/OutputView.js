const { Console } = require("@woowacourse/mission-utils");

export default class OutputView {
  printResult(coaches) {
    Console.print("메뉴 추천 결과입니다.");
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
    //각 코치 객체에서 출력
    Object.keys(coaches).forEach((coachNanme) => {
      Console.print(coaches[coachNanme].toPrintString());
    });
    Console.print("추천을 완료했습니다");
  }
}
