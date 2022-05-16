export class Club {
    constructor(cn) {
        // construct using another Club obj else do it from scratch
        if (cn instanceof Object) {
            this.clubName = cn.clubName
            this.dateCreated = cn.dateCreated
            this.members = cn.members
            this.events = cn.events
        }
        else {
            this.clubName = cn
            this.dateCreated = new Date()
            this.members = ['adam smith', 'john doe']
            this.events = ['pizza party', 'study group', 'hangout']
        }
    }
    get memberCount() {
        return this.members.length
    }

    get eventCount() {
        return this.events.length
    }

    addMember(p) {
        this.members.append(p)
    }

    addEvent(e) {
        this.events.append(e)
    }

    removeMember(p) {
        var index = this.members.indexOf(p)
        this.members.splice(index, index)
    }

    removeEvent(p) {
        var index = this.events.indexOf(p)
        this.events.splice(index, index)
    }
}



