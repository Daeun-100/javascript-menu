const InputHandler = require("../inputHandler/InputHandler.js");
const WeekScheduler = require("../WeekScheduler.js");
export default class Controller {
  #coachWithCanEat = {};
  constructor() {}

  async play() {
    const coachNames = await InputHandler.getCoachNames();
  }
}
