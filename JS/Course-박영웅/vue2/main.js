class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    함수() {
        return `${this.firstName} ${this.lastName}`
    }
    //정적 매소드. 범용적으로만 호출 가능
    static div(fullName) {
        return fullName.split(' ')
    }
}


const heropy = new User('HEROPY', 'Park')

console.log(heropy)
console.log(heropy.fullName)
console.log(User.div('HEROPY Park'))