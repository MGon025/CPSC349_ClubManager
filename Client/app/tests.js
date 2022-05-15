// create a new club
document.getElementById('createClub').addEventListener('click', function(event){
    const newClub = {
        clubName: document.getElementById('clubName').value,
        dateCreated: new Date().toISOString().slice(0, 10),
        members: [],
        events: [],
    }
    console.log(`Creating "${newClub.clubName}" club.`)

    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3000/api/clubs/create')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.responseType = 'json'
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response)
        }
    }
    xhr.send(JSON.stringify(newClub))
})

// get club(s)
// leave prompt empty to get all clubs
document.getElementById('getClubs').addEventListener('click', function(event){
    const q = prompt('clubName (leave empty for all): ')
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `http://localhost:3000/api/clubs?clubName=${q}`)
    xhr.responseType = 'json'
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response)
        }
        else if (this.readyState == 400) {
            console.log(this.response)
        }
    }
    xhr.send()
})
