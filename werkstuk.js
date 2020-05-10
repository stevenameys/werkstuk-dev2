"use strict";

fetchTeams();
//getConference();
let teamList = '';
//let conferenceList = [];

/* const formElement = document.getElementById("form");
formElement.addEventListener("submit", submitForm);


function submitForm(event) {
    event.preventDefault();
    const {
        value: full_name
    } = document.getElementById("text");
    getTeam(full_name);
}

async function getTeam(){
const team = await fetch('https://www.balldontlie.io/api/v1/teams/<ID>')
} */

async function fetchTeams() {
    const teams = await fetch('https://www.balldontlie.io/api/v1/teams');
    const teamsJson = await teams.json();
    teamList = teamsJson.data.map(({
        full_name
    }) => `<li>${full_name}</li>`).join("");
    document.getElementById("list").innerHTML = teamList;
    //console.log(teamsJson);
    //console.log(teamList);
}

/* async function getConference() {
  const conference = await fetch('https://www.balldontlie.io/api/v1/teams');
  const conferenceJson = await conference.json();
  conferenceList = conferenceJson.data.map(({conference})=>`<li>${conference}</li>`).join("");
  console.log(conferenceList);
  //console.log(teamList);
}  */

let filterInput = document.getElementById("text");
filterInput.addEventListener('keyup', filterTeams);

function filterTeams() {
    // console.log(1);
    let filterValue = document.getElementById("text").value.toUpperCase();
    console.log(filterValue);

    let ul = document.getElementById("teams");
    let li = document.getElementById("list");

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementById("list")[0];
        if (li.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }

    }
}

filterTeams()

sortTeams();

function sortTeams() {
    console.log(teamList);
}

//krijg team namen




/*sortTeams();

function sortTeams(){
      teamList.sort(teamA,teamB);

      console.log(teamList)
  }*/

/* function sortByAlphabet(teamA,teamB){
      if (teamA <= teamB) {
          return -1
      }else{
          return 1
      }
  }
 */