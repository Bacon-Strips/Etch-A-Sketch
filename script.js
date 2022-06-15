const display = document.querySelector('#display');
const btn = document.querySelector('#new');

function create_grid(n) {
    let nodes = document.querySelectorAll('.pixel');
    if (nodes !== null) {
        nodes.forEach((node) => {
            display.removeChild(node);
        })
    }
    n = Math.abs(n);
    n = Math.min(n, 100);
    for (let i = 0; i < n * n; i++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('class','pixel');
        pixel.setAttribute('style', `width: ${640 / n}px; height: ${640 / n}px`)
        display.appendChild(pixel);
    }
    base_option();
}


btn.addEventListener('click', () => {
    let val = prompt('Select grid size', '16');
    create_grid(parseInt(val));
})

function base_option() {
    const pixels = display.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.setAttribute('id', 'changed');
        });
    });
}

create_grid(16);
base_option();