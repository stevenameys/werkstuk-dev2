"use strict";

//fetchTeams();
//let teamList = '';

//bij deze methode werkt praktisch alles behalve dat er in de list
//in plaats van de namen overal undefined staat
//dit heb ik niet meer kunnen fixen

class teamNames {
    constructor(fullName) {
        this.fullName = fullName;
    }
    getNames() {
        return `<li>${this.fullName}</li>`;
    }
}

let html = '';

fetch('https://www.balldontlie.io/api/v1/teams')
    .then(function (teams) {
        return teams.json();
    })
    .then(function (teamsJson){
        
        let names = [];
        console.log(names);
        teamsJson.data.forEach((b) => {
            let a ;
            a = (new teamNames(teamsJson.data.full_name));
            names.push(a);
        });
        names.forEach((a) =>{
            html += a.getNames();
        });
        document.getElementById("list").innerHTML = html;
    }); 

    /*het volgende deel code dat hier geschreven staat is een andere methode
    voor mijn fetch. Deze keer in een async functie. Hier verschijnt er
    wel de list met alle namen van de teams.
 
     /* async function fetchTeams() {
        const teams = await fetch('https://www.balldontlie.io/api/v1/teams');
        const teamsJson = await teams.json();
        teamList = teamsJson.data.map(({
            full_name
        }) => `<li>${full_name}</li>`).join("");
        document.getElementById("list").innerHTML = teamList;
        //console.log(teamsJson);
        //console.log(teamList);
    }  */


    //de input in de searchbalk kan alleen weergegeven worden in de console

let filterInput = document.getElementById("text");
filterInput.addEventListener('keyup', filterTeams);

function filterTeams() {
    // console.log(1);
    let filterValue = document.getElementById("text").value.toUpperCase();
    console.log(filterValue);

    let ul = document.getElementById("teams");
    let li = document.getElementById("list");

}