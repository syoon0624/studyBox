//this
const timer = {
  timerName: 'HEROPY',
  timeout: function () {
    //이 함수는 호출된  timer라는 대상을 this로 지정
    console.log(this.timerName);
    //이 화살표 함수는 호출된 setTimeout()이라는 함수 상관 없이, timer라는 선언된 곳을 this로 지정
    setTimeout(() => {
      console.log(this.timerName);
    }, 1000);
  },
};
const timerB = {
  timerName: 'Leon',
};

timer.timeout();
timer.timeout.call(timerB);

//prototype
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const amy = new User('Amy', 'Jung');
console.log(amy.getFullName());

//객체 리터럴
const user = {
  firstName: 'HEROPY',
  lastName: 'Park',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());

const leon = {
  firstName: 'Leon',
  lastName: 'Miller',
};

console.log(user.getFullName.call(leon));
