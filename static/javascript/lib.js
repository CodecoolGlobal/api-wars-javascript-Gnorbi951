export default function loadTable (planets) {
         const planetSelector = document.querySelectorAll('#planet');
         const diameterSelector = document.querySelectorAll('#diameter');
         const climateSelector = document.querySelectorAll('#climate');
         const terrainSelector = document.querySelectorAll('#terrain');
         const waterSelector = document.querySelectorAll('#water');
         const populationSelector = document.querySelectorAll('#population');
         const residentSelector = document.querySelectorAll('#resident');
         let counter = 0;
         for (let sPlanet of planetSelector){
             sPlanet.innerHTML = planets.results[counter].name;
             counter++;
         }
         counter = 0;
         for (let sDiameter of diameterSelector) {
                 let formattedOutput = '';
                 let indexCounter = 0;
                 let currentDiameter = planets.results[counter].diameter;
                 currentDiameter = currentDiameter.split("").reverse().join("");
                 for (let number of currentDiameter) {
                     if (indexCounter % 3 === 0) {
                         formattedOutput += ',';
                         formattedOutput += number;
                     } else {
                         formattedOutput += number;
                     }
                     indexCounter++;
                 }
                 formattedOutput = formattedOutput.split("").reverse().join("");
                 let commaLastIndex = formattedOutput.lastIndexOf(',');
                 formattedOutput = formattedOutput.slice(0, commaLastIndex);
                 formattedOutput += ' km';
                 sDiameter.innerHTML = formattedOutput;
             counter++;
         }
         counter = 0;
         for (let sClimate of climateSelector) {
             sClimate.innerHTML = planets.results[counter].climate;
             counter++;
         }
         counter = 0;
         for (let sTerrain of terrainSelector) {
             sTerrain.innerHTML = planets.results[counter].terrain;
             counter++;
         }
         counter = 0;
         for (let sWater of waterSelector) {
             let waterPercent = planets.results[counter].surface_water;
             if (waterPercent === 'unknown') {
                 sWater.innerHTML = waterPercent;
             } else {
                 sWater.innerHTML = waterPercent + '%';
             }
             counter++;
         }
         counter = 0;
         for (let sPopulation of populationSelector) {
             let currentPopulation = planets.results[counter].population;
             if (currentPopulation === 'unknown') {
                 sPopulation.innerHTML = currentPopulation;
             } else {
                 let formattedOutput = '';
                 let popCounter = 0;
                 currentPopulation = currentPopulation.split("").reverse().join("");
                 for (let number of currentPopulation) {
                     if (popCounter % 3 === 0) {
                         formattedOutput += ',';
                         formattedOutput += number;
                     } else {
                         formattedOutput += number;
                     }
                     popCounter++;
                 }
                 formattedOutput = formattedOutput.split("").reverse().join("");
                 let commaLastIndex = formattedOutput.lastIndexOf(',');
                 formattedOutput = formattedOutput.slice(0, commaLastIndex);
                 formattedOutput += ' people';
                 sPopulation.innerHTML = formattedOutput;
             }
             counter++;
         }
         counter = 0;
         for (let sResident of residentSelector) {
             let residentNumber = planets.results[counter].residents;
             if (residentNumber.length === 0) {
                 sResident.innerHTML = 'No known residents';
             } else {
                 sResident.innerHTML = `<button>${residentNumber.length} resident(s)</button>`;
             }
             counter++;
         }
    }