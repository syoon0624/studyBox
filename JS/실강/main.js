const heropy = {
  name: 'Heropy'
}
const amy = {
  name: 'Amy',
  getName(age) {
    return `${this.name} is ${age}`
  }
}

// call
console.log(
  amy.getName.call(heropy, 85)
)
// apply
console.log(
  amy.getName.apply(heropy, [85])
)
// bind
const heropysGetName = amy.getName.bind(heropy)
console.log(heropyGetName(85))