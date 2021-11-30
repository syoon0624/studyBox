// import { makeAutoObservable } from "mobx";
import { action, computed, makeObservable, observable } from "mobx";
class CartStore {
    cartItems = [];
    cartItem = {
        productName: '',
        price: 0,
        amount: 0,
    }
    totalPrice = 0

  constructor() {
    // makeAutoObservable(this);
    makeObservable(this, {
      cartItems: observable,
      cartItem: observable,
      addCart: action,
      assignCart: action,
      total: computed
    });
  }

  //actions
  addCart = item => {
    const computedItem = {
        productName: item.productName,
        price: item.price,
        amount: 1,
    }
    //탐색(본 배열에 같은 상품이 있는지?)
    const isIn = this.cartItems.find(ele => ele.productName === item.productName);
    if(!isIn) {
        this.cartItems = [...this.cartItems, computedItem];
    } else {
        isIn.amount++;
    }
    console.log(this.cartItems);
  };

  assignCart = item => {
    this.cartItem = item;
  };

  //computed
  get total() {
      const totalPrice = this.cartItems.reduce((sum,ele) => {
          return sum + (Number(ele.price) * Number(ele.amount)); 
      }, 0)
      return totalPrice;
  }
}

export default CartStore;