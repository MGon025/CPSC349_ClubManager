function Event(ename, start, end, loc, advisor, rep) {
    this.eventName = ename
    this.startTime = start
    this.endTime = end
    this.location = loc
    this.advisor = advisor
    this.repeat = rep
    this.maybe = []
    this.going = []

    Object.defineProperty(this, 'maybeCount', {
        get: function() {return this.maybe.length}
    })
    Object.defineProperty(this, 'goingCount', {
        get: function() {return this.going.length}
    })
}

// add Person object to maybe
Event.prototype.addMaybe = function(p) {
    // remove from going if found
    if (this.going.indexOf(p)>=0) {removeGoing(p)}
    this.maybe.append(p)
}

// add Person object to going
Event.prototype.addGoing = function(p) {
    // remove from maybe if found
    if (this.maybe.indexOf(p)>=0) {removeMaybe(p)}
    this.going.append(p)
}

// remove Person object from maybe
Event.prototype.removeMaybe = function(p) {
    const index = this.maybe.indexOf(p)
    this.maybe.splice(index, index<0 ? 0:1)
}

// remove Person object from going
Event.prototype.removeGoing() = function(p) {
    const index = this.going.indexOf(p)
    this.going.splice(index, index<0 ? 0:1)
}

Event.prototype.getTimeLeft = function() {
    if (this.endTime == null) {return null}
    const time = this.endTime - this.startTime
    const days = time/1000/60/60/24
    const hours = (days-Math.trunc(days)) * 24
    const minutes = (hours-Math.trunc(hours)) * 60
    const seconds = (minutes-Math.trunc(minutes)) * 60
    return {
        time: time,
        days: Math.trunc(days),
        hours: Math.trunc(hours),
        minutes: Math.trunc(minutes),
        seconds: Math.trunc(seconds),
    }
}