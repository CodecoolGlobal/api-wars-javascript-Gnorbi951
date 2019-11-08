import {loadTable, get} from './lib.js';

function main() {

    function nextPage() {

    }

    window.onload = function() {

    let promise = get('https://swapi.co/api/planets');
    promise.then(loadTable);
    const nextButton = document.getElementById('next_btn');

    let currentUrl = 'https://swapi.co/api/planets';
    let nextUrl = '';
    nextButton.addEventListener('click', function () {
        promise.then(function(defs){
            nextUrl = defs.next;
        });
    })


};
}

main();