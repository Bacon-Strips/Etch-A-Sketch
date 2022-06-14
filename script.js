const display = document.querySelector('#display');

function create_grid(n) {
    n = Math.abs(n);
    n = Math.min(n, 100);
    for (let i = 0; i < n * n; i++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('class','pixel');
        display.appendChild(pixel);
    }
}

create_grid(16);

const pixels = display.querySelectorAll('.pixel');

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.setAttribute('id', 'changed');
    });
});