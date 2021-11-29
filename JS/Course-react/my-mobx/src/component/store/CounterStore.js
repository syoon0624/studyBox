// import { makeAutoObservable } from "mobx";
import { action, computed, makeObservable, observable } from "mobx";
class CounterStore {
  counter = 5;
  amount = 1;

  constructor() {
    // makeAutoObservable(this);
    makeObservable(this, {
      counter: observable,
      amount: observable,
      addCounter: action,
      minusCounter: action,
      changeAmount: action,
      total: computed
    });
  }

  //actions
  addCounter = () => {
      console.log("증가");
      this.counter++;
  };

  minusCounter = () => {
      console.log("감소");
      this.counter--;
  };

  //assignAmount
  changeAmount = changedAmount => {
    console.log("amount : ", changedAmount);
    this.amount = changedAmount
  };

  get total() {
      console.log(`Computed... ${this.counter} * ${this.amount}`);
      return this.counter * this.amount;
  }
}

export default CounterStore;