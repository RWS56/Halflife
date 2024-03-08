let canvas = document.getElementById("my-canvas");
let cursorText = document.getElementById("cursorText");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', (event) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let mousedown = false;
window.addEventListener("mousedown", (event) => {
    origin = [...mousepos];
    mousedown = true;
});

window.addEventListener("mouseup", (event) => {
    walls[`${[origin[0]]};${origin[1]}`] = new Wall([...origin], mousepos[0] - origin[0], mousepos[1] - origin[1], "lead");
    mousedown = false;
});

window.addEventListener("mousemove", (event) => {
    mousepos[0] = event.x;
    mousepos[1] = event.y;
});

let ctx = canvas.getContext("2d");

let mousepos = [0, 0]
let origin = [0, 0]

let walls = {

};

let wallColors = {
    "lead": "rgb(33, 33, 33)",
    
};

function update() {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (mousedown) {
        ctx.fillRect(origin[0], origin[1], mousepos[0] - origin[0], mousepos[1] - origin[1]);
    }

    for (let i in walls) {
        ctx.fillStyle = wallColors[walls[i].type];
        ctx.fillRect(walls[i].origin[0], walls[i].origin[1], walls[i].width, walls[i].height);
    }

    ctx.closePath();

    for(let i in walls){
        if(walls[i].rect().pointWithin(mousepos)){
            cursorText.innerHTML = `Type:${walls[i].type}\nPos:${walls[i].origin}`;
        }
    }

    requestAnimationFrame(update);
}

update();