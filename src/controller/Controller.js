const InputHandler = require("../inputHandler/InputHandler.js");
const WeekScheduler = require("../WeekScheduler.js");
const Coach = require("../Coach.js");
export default class Controller {
  #coachWithCanEat = {};
  constructor() {}

  async play() {
    const coachNames = await InputHandler.getCoachNames();
    const weekScheduler = new WeekScheduler();
    for (const name of coachNames) {
      const canEat = await InputHandler.getCantEat(name);
      const coach = new Coach(name, canEat);
      //week스케쥴러에 각 코치 객체 삽입;
      weekScheduler.coach = coach;
    }
    weekScheduler.recommendFive();
  }
}
