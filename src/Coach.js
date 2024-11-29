class Coach {
  #name;
  #canEat = [];
  #menu;

  constructor(name, canEat) {
    this.#name = name;
    this.#menu = [];
    //arr로 받음
    this.#canEat = canEat;
  }
  get name() {
    return this.#name;
  }
  checkHaseSameMenu(menu) {
    return this.#menu.includes(menu);
  }
  set menu(menu) {
    this.#menu.push(menu);
  }
  checkCanEat(menu) {
    return this.#canEat.includes(menu);
  }
}

module.exports = Coach;
