let height = 0;
let width  = 0;
let lifes = 1;
let time = 60;

let createBeeTime = 1500;

let level = window.location.search.replace('?', '');

if(level === 'normal') {
    createBeeTime = 1500;
} else if(level === 'hard') {
    createBeeTime = 1000;
} else if(level === 'chucknorris') {
    createBeeTime = 750;
}

function adjustStageSize() {
    width  = window.innerWidth;
    height = window.innerHeight;
    
    console.log(width, height);
}

adjustStageSize();

let stopwatch = setInterval(function(){
    time -= 1;

    if(time < 0) {
        clearInterval(stopwatch);
        clearInterval(createBee);
        window.location.href = "victory.html";
    } else {
        document.getElementById('stopwatch').innerHTML = time; 
    }

}, 1000);

function randomPosition() {
    // remover bee anterior (caso exista)
    if(document.getElementById('bee')) {
        document.getElementById('bee').remove();

        if(lifes > 5) {
            window.location.href = "game-over.html";
        } else {
            document.getElementById('life' + lifes).src="img/empty-heart.png";
            lifes++;
        }      
    }

    let positionX = Math.floor(Math.random() * width) - 90;
    let positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    console.log(positionX, positionY);

    // criar o elemento html
    let bee = document.createElement('img');
    bee.src = 'img/bee.png';
    bee.className  = randomSize() +' '+ randomSide();
    bee.style.left = positionX + 'px';
    bee.style.top  = positionY + 'px';
    bee.style.position = 'absolute';
    bee.id = 'bee';
    bee.onclick = function() {
        this.remove();
    }

    document.body.appendChild(bee);
    randomSide();
}

function randomSize() {
    let value = Math.floor(Math.random() * 3);

    switch(value) {
        case 0:
            return 'bee1'

        case 1:
            return 'bee2'

        case 2:
            return 'bee3'
    }
}

function randomSide() {
    let value = Math.floor(Math.random() * 2);

    switch(value) {
        case 0:
            return 'sideA'

        case 1:
            return 'sideB'
    }
}
