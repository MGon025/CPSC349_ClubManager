// Summary view of all clubs

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
        const header = document.getElementById('listOfClubs');
        this.response.forEach(club => {
            // <li class="club"><a href="/detailed-UI.html?cn=cn">Club name #1</a></li>
            // prepare list container
            var li = document.createElement('li');
            li.class = 'club';

            // create link to detailed page
            var ref = document.createElement('a');
            ref.href = '/detailed-UI.html?cname=' + club['clubName'];
            ref.innerHTML = club['clubName'];

            li.appendChild(ref)
            header.appendChild(li)
        });
    }
    else if (this.readyState == 400) {
        console.log(this.response);
    }
}
xhr.send();