import {loadTable, get} from './lib.js';


window.onload = function() {

    let promise = get('https://swapi.co/api/planets');
    promise.then(loadTable);

};
