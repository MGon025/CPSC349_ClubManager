function Person(fn, ln, dob) {
    this.fistName = fn
    this.lastName = ln
    this.dob = dob

    Object.defineProperty(this, 'name', {
        get: function() {return `${this.firstName} ${this.lastName}`}
    })
}