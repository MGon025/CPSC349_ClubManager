class Person {
    constructor(fn, ln, dob) {
        this.fistName = fn
        this.lastName = ln
        this.dob = dob
    }
    get name() {
        return `${this.firstName} ${this.lastName}`
    }
}

