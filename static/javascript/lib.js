export default function loadTable (planets) {
         const planetSelector = document.querySelectorAll('#planet');
         let counter = 0;
         for (let sPlanet of planetSelector){
             sPlanet.innerHTML = planets.results[counter].name;
             counter++;
         }
         const diameterSelector = document.querySelectorAll('#diameter');
         counter = 0;
         for (let sDiameter of diameterSelector) {
             sDiameter.innerHTML = planets.results[counter].diameter + ' km';
             counter++;
         }

    }