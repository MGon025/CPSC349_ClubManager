function Club(cn) {
    this.clubName = cn
    this.dateCreated = new Date().toISOString().slice(0, 10)
    this.members = []
    this.events = []

    Object.defineProperty(this, 'memberCount', {
        get: function() {return this.members.length}
    })
    Object.defineProperty(this, 'eventCount', {
        get: function() {return this.events.length}
    })
}

// add Person object to club members
Club.prototype.addMember = function(p) {
    this.members.append(p)
}

// add Event object to club events
Club.prototype.addEvent = function(e) {
    this.events.append(e)
}