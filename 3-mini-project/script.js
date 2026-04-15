let lists = document.querySelectorAll('.list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let cardList = document.querySelectorAll('.card')

let dragged;

cardList.forEach(list => {
    list.addEventListener("dragstart", (e) => {
        dragged = e.target;
    })
});

lists.forEach(list => {
    list.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
});

lists.forEach(list => {
    list.addEventListener("drop", (e) => {
        list.appendChild(dragged);
    })
});