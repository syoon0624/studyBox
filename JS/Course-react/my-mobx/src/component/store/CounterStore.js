// import { makeAutoObservable } from "mobx";
import { action, makeObservable, observable } from "mobx";
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
}

export default CounterStore;