const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let isJumping = false;
let gravity = 0.9;

function jump() {
    if (isJumping) return;
    isJumping = true;
    let position = 0;
    let interval = setInterval(() => {
        if (position >= 150) {
            clearInterval(interval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                position -= 5;
                position = position * gravity;
                dino.style.bottom = position + 'px';
            }, 20);
        }
        position += 20;
        position = position * gravity;
        dino.style.bottom = position + 'px';
    }, 20);
}

function checkCollision() {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop <= 40) {
        alert("¡Game Over!");
        cactus.style.animation = "none";
        cactus.style.display = "none";
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === " ") {
        jump();
    }
});

setInterval(checkCollision, 10);
