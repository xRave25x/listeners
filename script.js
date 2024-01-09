const btn = document.getElementById('btn');
const square = document.getElementById('square');
const cirlce = document.getElementById('circle');
const eBtn = document.getElementById('e_btn');
const text = document.getElementById('text');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');


const colorize = () => {
    if (text.value === 'blue'){
        square.style.backgroundColor = 'blue';
    }
    if (text.value === 'green'){
        square.style.backgroundColor = 'green';
    }
    if (text.value === 'yellow'){
        square.style.backgroundColor = 'yellow';
    }
    if (text.value === 'red'){
        square.style.backgroundColor = 'red';
    }

}

eBtn.style.display = 'none';

const size = (event) => {
    rangeSpan.textContent = event.target.value;

    cirlce.style.width = range.value + '%';
    cirlce.style.height = range.value + '%';
}

btn.addEventListener('click', colorize);

range.addEventListener('input', size);