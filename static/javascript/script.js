import loadTable from './lib.js';


window.onload = function() {

    function get(url){
        return new Promise(function(resolve, reject){
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true);
            xhttp.onload = function () {
                if (xhttp.status === 200){
                    resolve(JSON.parse(xhttp.response));
                } else {
                    reject(xhttp.statusText);
                }
            };
            xhttp.onerror = function () {
                reject(xhttp.statusText);
            };
            xhttp.send();
        });
    }
    let promise = get('https://swapi.co/api/planets');
    promise.then(loadTable);

};
