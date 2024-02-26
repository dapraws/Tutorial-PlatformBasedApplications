function sumOddValues(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

document.getElementById('oddValuesForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const result = sumOddValues(min, max);
    document.getElementById('result').innerText = `Sum of odd values from ${min} to ${max}: ${result}`;
});

function toggleAlignment() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box) {
        var currentAlignment = box.style.textAlign;
        if (currentAlignment === 'left' || currentAlignment === '') {
            box.style.textAlign = 'center';
        } else if (currentAlignment === 'center') {
            box.style.textAlign = 'right';
        } else {
            box.style.textAlign = 'left';
        }
    });
}

function toggleBackgroundColor() {
    var box1 = document.getElementById('box1');
    var currentColor = box1.style.backgroundColor;
    if (currentColor === '' || currentColor === 'rgb(204, 204, 204)') {
        box1.style.backgroundColor = 'blue';
        box2.style.backgroundColor = 'red';
    } else {
        box1.style.backgroundColor = '#ccc';
        box2.style.backgroundColor = '#ccc';
    }
}
