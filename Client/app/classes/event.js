class Event {
    constructor(ename, start, end, loc, advisor, rep) {
        this.eventName = ename
        this.startTime = start
        this.endTime = end
        this.location = loc
        this.advisor = advisor
        this.repeat = rep
        this.maybe = []
        this.going = []
    }
    get maybeCount() {
        return this.maybe.length
    }
    get goingCount() {
        return this.going.length
    }
    
    addMaybe(p) {
        // remove from going if found
        if (this.going.indexOf(p) >= 0) { removeGoing(p)} 
        this.maybe.append(p)
    }
    
    addGoing(p) {
        // remove from maybe if found
        if (this.maybe.indexOf(p) >= 0) { removeMaybe(p)} 
        this.going.append(p)
    }
    
    removeMaybe(p) {
        const index = this.maybe.indexOf(p)
        this.maybe.splice(index, index)
    }

    removeGoing(p) {
        const index = this.going.indexOf(p)
        this.going.splice(index, index)
    }

    getTimeLeft() {
        if (this.endTime == null) { return null} 
        const time = this.endTime - this.startTime
        const days = time / 1000 / 60 / 60 / 24
        const hours = (days - Math.trunc(days)) * 24
        const minutes = (hours - Math.trunc(hours)) * 60
        const seconds = (minutes - Math.trunc(minutes)) * 60
        return {
            time: time,
            days: Math.trunc(days),
            hours: Math.trunc(hours),
            minutes: Math.trunc(minutes),
            seconds: Math.trunc(seconds),
        }
    }
}
