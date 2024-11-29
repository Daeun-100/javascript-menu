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
  get menu() {
    return this.#menu;
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
  toPrintString() {
    const name = this.#name;
    const menu = this.#menu;
    const string =
      "[" +
      name +
      " |" +
      menu[0] +
      " |" +
      menu[1] +
      " |" +
      menu[2] +
      " |" +
      menu[3] +
      " |" +
      menu[4] +
      "]";
    return string;
  }
}

module.exports = Coach;
