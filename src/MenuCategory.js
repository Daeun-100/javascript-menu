import { CATEGORY } from "./Constants";
import { Randoms } from "@woowacourse/mission-utils";
export default class MenuCategory {
  getCategory() {
    const index = Randoms.pickNumberInRange(1, 5);
    return CATEGORY[index];
  }
}
