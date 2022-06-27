import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

const button = document.querySelector('imgEndScene2');

function easterAgg() {
    button.addEventListener('click', ($event) => {
        const target = $event.target.getBoundingClientRect();
        const halfWidth = target.width / 2;
        const halfHeight = target.height / 2;
        confetti({
            particleCount: 150,
            spread: 60,
            angle: 90,
            colors: ['#00fff1', '#ff00aa', '#46fcb4'],
            origin: {
                x: (target.x + halfWidth) / window.innerWidth,
                y: (target.y + halfHeight) / window.innerHeight,
            },
        });
    });
}