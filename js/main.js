var height = 0;
var width  = 0;
var lifes = 1;

function adjustStageSize() {
    width  = window.innerWidth;
    height = window.innerHeight;
    
    console.log(width, height);
}

adjustStageSize();

function randomPosition() {
    // remover bee anterior (caso exista)
    if(document.getElementById('bee')) {
        document.getElementById('bee').remove();

        if(lifes > 5) {
            alert("Interromper o jogo (game over)");
        } else {
            document.getElementById('life' + lifes).src="img/empty-heart.png";
            lifes++;
        }      
    }

    var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    console.log(positionX, positionY);

    // criar o elemento html
    var bee = document.createElement('img');
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
    var value = Math.floor(Math.random() * 3);

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
    var value = Math.floor(Math.random() * 2);

    switch(value) {
        case 0:
            return 'sideA'

        case 1:
            return 'sideB'
    }
}
