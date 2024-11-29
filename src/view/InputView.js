const { Console } = require("@woowacourse/mission-utils");

class InputView {
  static async inputText() {
    let input = await Console.readLineAsync("input text를 입력해주세요");

    return input;
  }
  static async coachNames() {
    let input = await Console.readLineAsync(
      "코치의 이름을 입력해 주세요. (, 로 구분)"
    );

    return input;
  }
  static async cantEat(coach) {
    let input = await Console.readLineAsync(
      `${coach}(이)가 못 먹는 메뉴를 입력해 주세요.`
    );

    return input;
  }
}

module.exports = InputView;
