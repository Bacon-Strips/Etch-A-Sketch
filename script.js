const display = document.querySelector('#display');
const btn = document.querySelector('#new');
const color_btn = document.querySelector('#color');
const reset_btn = document.querySelector('#reset');

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
    default_colorBtn();
}

function black(event) {
    event.target.style.backgroundColor = 'black';
}

function base_option() {
    const pixels = display.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.removeEventListener('mouseover', color);
        pixel.addEventListener('mouseover', black);
    });
}

function color(event) {
    event.target.style.backgroundColor = `#${randomColor()}`;
}

function color_option() {
    const pixels = display.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.removeEventListener('mouseover', black);
        pixel.addEventListener('mouseover', color);
    });
}

btn.addEventListener('click', () => {
    let val = prompt('Select grid size', '16');
    create_grid(parseInt(val));
})

let randomColor = () => Math.floor(Math.random()*16777215).toString(16);

function toColor(event) {
    color_option();
    event.target.removeEventListener('click', toColor)
    switch_back();
}

function default_colorBtn() {
    color_btn.textContent = 'Random Color'
    color_btn.addEventListener('click', toColor);  
}

function toBlack(event) {
    base_option();
    event.target.removeEventListener('click',toBlack);
    default_colorBtn();
}

function switch_back() {
    color_btn.textContent = 'Back to Black';
    color_btn.addEventListener('click', toBlack);
}

reset_btn.addEventListener('click', () => {
    let nodes = document.querySelectorAll('.pixel');
    nodes.forEach((node) => {
        node.style.backgroundColor = 'whitesmoke';
    })
})

create_grid(16);