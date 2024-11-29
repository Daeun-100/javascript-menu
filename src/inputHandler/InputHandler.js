const InputView = require("../view/InputView.js");
const Validate = require("../validate/Validate.js");
class InputHandler {
  constructor() {}

  async handleError(e, callback) {
    Console.print(e.message);
    return await callback();
  }

  static async getValidatedInput() {
    try {
      // const input = await this.#inputView.inputText();
      //input 가공
      //validate
      // this.#validate.validateInput();

      //input값 리턴, 다른 class에서 받아서 사용
      return input;
    } catch (e) {
      //에러 발생시 다시 input
      //this.inputText이름 바꾸기!!!
      return this.handleError(e, this.inputText.bind(this));
    }
  }
  static async getCoachNames() {
    try {
      const input = await InputView.coachNames();
      //input 가공
      const inputArr = input.split(",");
      //validate

      //input값 리턴, 다른 class에서 받아서 사용
      return inputArr;
    } catch (e) {
      //에러 발생시 다시 input
      //this.inputText이름 바꾸기!!!
      return this.handleError(e, this.getCoachNames.bind(this));
    }
  }
  static async getCoachNames() {
    try {
      const input = await InputView.coachNames();
      //input 가공
      const inputArr = input.split(",");
      //validate
      if (!inputArr[0]) {
        return [];
      }
      //input값 리턴, 다른 class에서 받아서 사용
      return inputArr;
    } catch (e) {
      //에러 발생시 다시 input
      //this.inputText이름 바꾸기!!!
      return this.handleError(e, this.getCoachNames.bind(this));
    }
  }
  static async getCantEat(coach) {
    try {
      const input = await InputView.cantEat(coach);
      //input 가공
      const inputArr = input.split(",");
      //validate

      //input값 리턴, 다른 class에서 받아서 사용
      return inputArr;
    } catch (e) {
      //에러 발생시 다시 input
      //this.inputText이름 바꾸기!!!
      return this.handleError(e, this.getCantEat.bind(this));
    }
  }
}

module.exports = InputHandler;
