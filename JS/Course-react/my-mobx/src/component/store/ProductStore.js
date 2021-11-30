// import { makeAutoObservable } from "mobx";
import { action, makeObservable, observable } from "mobx";
class ProductStore {
  product = {
      productName: '',
      price: 0,
      amount: 10,
  };

  products = []
  constructor() {
    // makeAutoObservable(this);
    makeObservable(this, {
      products: observable,
      product: observable,
      addAmount: action,
      addProduct: action,
      minusAmount: action,
      assignProduct: action,
      changeAmount: action,
    });
  }

  //actions
  addAmount = () => {
      console.log("재고량 증가");
      this.products.amount++;
  };

  minusAmount = () => {
      console.log("재고량 감소");
      this.products.amount--;
  };

  addProduct = item => {
    this.products = [item, ...this.products]
  };

  assignProduct = item => {
    this.product = item;
  };

  //assignAmount
  changeAmount = changedAmount => {
    console.log("amount : ", changedAmount);
    this.products.amount = changedAmount
  };
}

export default ProductStore;