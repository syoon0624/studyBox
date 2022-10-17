// this

function user() {
  this.firstName = 'Neo'
  this.lastName = 'Anderson'
  
  return {
    firstName: 'Heropy',
    lastName: 'Park',
    age: 85,
    getFullName: () => {
      return `${this.firstName} ${this.lastName}`
    },
    getFullName2: function() {
      return `${this.firstName} ${this.lastName}`
    } 
  }
}

const u = user()
console.log(u.getFullName())
console.log(u.getFullName2())

const amy = {
  firstName: 'Amy',
  lastName: 'Clarke'
}

console.log(u.getFullName2.call(amy)) // 'Amy Clarke'