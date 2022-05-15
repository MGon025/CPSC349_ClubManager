// create a new club
document.getElementById('createClub').addEventListener('click', function(event){
    const cname = document.getElementById('clubName').value
    console.log(`Creating "${cname}" club.`)

    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3000/api/clubs/create')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.responseType = 'json'
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response)
        }
    }
    xhr.send(JSON.stringify({clubName: cname}))
})

// view all clubs
document.getElementById('getClubs').addEventListener('click', function(event){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:3000/api/clubs')
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