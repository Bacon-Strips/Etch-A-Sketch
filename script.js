const display = document.querySelector('#display');
const btn = document.querySelector('#new');
const colorBtn = document.querySelector('#color');

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

function base_option() {
    const pixels = display.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'black';
        });
    });
}

function color_option() {
    const pixels = display.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = `#${randomColor()}`;
        });
    });
}

btn.addEventListener('click', () => {
    let val = prompt('Select grid size', '16');
    create_grid(parseInt(val));
})

let randomColor = () => Math.floor(Math.random()*16777215).toString(16);

function default_color() {
    colorBtn.addEventListener('click', () => {
        color_option();
        colorBtn.textContent = 'Back to black';
        switch_back();
    })  
}

function switch_back() {
    colorBtn.addEventListener('click', () => {
        base_option();
        colorBtn.textContent = 'Random colors';
        default_color();
    })
}


create_grid(16);
default_color();