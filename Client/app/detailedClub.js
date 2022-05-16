import {Club} from '../club.js'
// detailed view

// get club name from url query parameters
const params = new URLSearchParams(window.location.search);
const cname = params.get('cname');
if (cname == '') {throw new Error('Club not found.');}

// display club properties
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
        // reconstruct Club object
        var club = new Club(this.response[0])
        console.log(club)

        // update club name
        var name = document.getElementById('cname');
        name.innerHTML += ' ' + club['clubName'];

        // update date created
        var dob = document.getElementById('dob');
        var date = new Date(club['dateCreated']);
        dob.innerHTML += ' ' + date.toISOString().slice(0, 10);

        // update member list
        var peopleList = document.getElementById('people').childNodes;
        peopleList[1].innerHTML = `People (${club.memberCount})`;
        club['members'].forEach(name => {
            var li = document.createElement('li');
            li.innerHTML = name
            peopleList[3].appendChild(li);
        });
        
        console.log(club.eventCount);
        console.log(club['events']);


    }
    else if (this.readyState == 400) {
        console.log(this.response);
    }
}
xhr.send();