import {Club} from '../club.js'

// create a new club
document.getElementById('createClub').addEventListener('click', function(event){
    const cname = document.getElementById('clubName').value;
    const newClub = new Club(cname);
    console.log(`Creating "${newClub.clubName}" club.`);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/clubs/create');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response);
        }
        else if (this.readyState == 400) {
            console.log(`"${cname}" already exists.`);
            console.log(this.response);
        }
    }
    xhr.send(JSON.stringify(newClub));
});

// summary view
document.getElementById('getClubs').addEventListener('click', function(event){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/api/clubs`);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // check if any clubs are found
            if (this.response.length == 0) {
                console.log('No clubs registered');
            }

            // display all clubs
            console.log(this.response);
        }
        else if (this.readyState == 400) {
            console.log(this.response);
        }
    }
    xhr.send();
});

// detailed view
document.getElementById('getEvents').addEventListener('click', function(event){
    // club filter
    var cname = prompt('Club Name: ');
    if (cname == '') {return}

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/api/clubs?cname=${cname}`);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // check if club is found
            if (this.response.length == 0) {
                console.log(`"${cname}" not found`);
                return;
            }

            // display club properties
            console.log(this.response);

            // reconstruct Club object
            var club = new Club(this.response[0])
            console.log(club)

            console.log(club['clubName']);

            var date = new Date(club['dateCreated']);
            console.log(date.getDay());

            console.log(club['members']);

            console.log(club['events']);

            console.log(club.memberCount);

            console.log(club.eventCount);
        }
        else if (this.readyState == 400) {
            console.log(this.response);
        }
    }
    xhr.send();
});
