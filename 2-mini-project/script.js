const generateBtn = document.getElementById('generate-btn');
const generateIcon = document.querySelector('.fa-rotate');
const hexValues = document.querySelectorAll('.hex-value');
const colorBackground = document.querySelectorAll('.color');
const copyBtn = document.querySelectorAll('.fa-copy');

let rotation = 0;

generateBtn.addEventListener('click', () => {
    rotation = rotation + 360;
    generateIcon.style.transform = `rotate(${rotation}deg)`;

    const arr = [];

    let randHex = '';

    for (let j = 0; j < 5; j++) {
        randHex = '';
        for (let i = 0; i < 6; i++) {
            let randNum = (Math.floor(Math.random() * 16).toString(16)).toUpperCase();
            randHex = randHex + randNum;
        };
        arr.push(`#${randHex}`);

    };

    arr.forEach(function (color, index) {
        hexValues[index].innerText = color;
    });

    colorBackground.forEach(function (bg, index) {
        bg.style.backgroundColor = arr[index];
    });
});

copyBtn.forEach(function (copy) {
    copy.addEventListener('click', () => {
        navigator.clipboard.writeText(copy.parentElement.querySelector('.hex-value').innerText);
        const checkBtn = document.createElement('i');
        copy.style.display = 'none';
        checkBtn.classList.add("fa-solid");
        checkBtn.classList.add("fa-check");
        checkBtn.style.color = ' rgb(9, 255, 0)';
        checkBtn.style.fontSize = '0.6rem';
        checkBtn.style.display = 'flex';
        checkBtn.style.justifyContent = 'center';
        checkBtn.style.alignContent = 'center';
        checkBtn.style.padding = '2px';
        copy.parentElement.appendChild(checkBtn);

        setTimeout(() => {
            copy.style.display = 'flex';
            checkBtn.style.display = 'none';
        }, 1000);
    });


});


