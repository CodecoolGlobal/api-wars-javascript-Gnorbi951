export default function loadTable (planets) {
         let planetSelector =document.querySelectorAll('#planet');
         let counter = 0;
         for (let sPlanet of planetSelector){
             sPlanet.innerHTML = planets.results[counter].name;
             counter++;
         }

    }