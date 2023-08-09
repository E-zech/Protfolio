let name = localStorage.getItem('name');
name = JSON.parse(name);

const container = document.getElementById('container');
const html = document.querySelector('.fa-HTML');
const css = document.querySelector('.fa-CSS');
const bootStrap = document.querySelector('.fa-B');
const javaScript = document.querySelector('.fa-JS');
const oop = document.querySelector('.fa-OOP');
const headLine = document.querySelector('.headLine');
const txt = document.querySelector('.txt');
const watchSrc = document.getElementById('watch');
const downloadSrc = document.getElementById('download');
const imgPreview = document.getElementById('imePreview');
const link2Game = document.getElementById("link2Game");
imgPreview.classList.add('active');


function getAppName() {
    if (name) {
        if (name == 'Calculator') {
            bootStrap.style.display = "none";
            headLine.innerHTML = "Calculator"
            txt.innerHTML = "Calculator - a mathematical tool capable of performing basic arithmetic operations";
            watchSrc.href = "../Projects/Calculator/index.html";
            link2Game.href = watchSrc.href;
            downloadSrc.href = "../zips/Calculator.zip";
            imgPreview.src = "../Images/Calculator img.png";

        }

        else if (name == 'Snake') {
            bootStrap.style.display = "none";
            oop.style.display = "none";
            headLine.innerHTML = "Snake";
            txt.innerHTML = "Snake - a classic video game known for its simple yet addictive gameplay";
            watchSrc.href = "../Projects/Snake/index.html";
            link2Game.href = watchSrc.href;
            downloadSrc.href = "../zips/Snake.zip";
            imgPreview.src = "../Images/Snake img.png";

        }

        else if (name == 'MemoryGame') {
            bootStrap.style.display = "none";
            oop.style.display = "none";
            headLine.innerHTML = "Memory Game";
            txt.innerHTML = "MemoryGame - a cognitive exercise designed to test and improve one's memory";
            watchSrc.href = "../Projects/Memory Game/index.html";
            link2Game.href = watchSrc.href;
            downloadSrc.href = "../zips/Memory Game.zip";
            imgPreview.src = "../Images/Memory-Game img.png";
        }

        else if (name == 'TicTacToe') {
            bootStrap.style.display = "none";
            oop.style.display = "none";
            headLine.innerHTML = "Tic Tac Toe";
            txt.innerHTML = "TicTacToe - a classic game played on a grid consisting of nine squares";
            watchSrc.href = "../Projects/Tic-tac-toe/index.html";
            link2Game.href = watchSrc.href;
            downloadSrc.href = "../zips/Tic-tac-toe.zip";
            imgPreview.src = "../Images/tic tac toe.png";
        }

        else if (name == 'ToDoList') {
            bootStrap.style.display = "none";
            oop.style.display = "none";
            headLine.innerHTML = "To Do List";
            txt.innerHTML = "ToDoList -  an organizational tool used to manage tasks and activities";
            watchSrc.href = "../Projects/To do list/index.html";
            link2Game.href = watchSrc.href;
            downloadSrc.href = "../zips/Calculator.zip";
            imgPreview.src = "../Images/To Do List.png";
        }

        else if (name == 'Gallery') {
            bootStrap.style.display = "none";
            headLine.innerHTML = "Gallery";
            txt.innerHTML = "Gallery -  a visual tool capable of displaying a collection of photos";
            watchSrc.href = "../Projects/Gallery/index.html";
            link2Game.href = watchSrc.href;
            downloadSrc.href = "../zips/Gallery.zip";
            imgPreview.src = "../Images/Gallery img.png";
        }

    }
}

getAppName();
