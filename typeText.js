const t = [
    'Hello world\n',
    'Hello world',
];

function typeText() {
    let line = 0;
    let count = 0;
    let out = '';
    let htmlOut = document.querySelector('pre');

    function typeLine() {
        //рисуем строку
        let interval = setTimeout(function () {
            out += t[line][count];
            htmlOut.innerHTML = out + '|';
            count++;
            //проверки
            //не закончилась ли строка
            if (count >= t[line].length) {
                count = 0;
                line++;

                if (line === t.length) {
                    clearTimeout(interval);
                    htmlOut.innerHTML = out;
                    return true;
                }
            }
            typeLine();
        }, getRandomInt(200)) 
        
    }

    typeLine();
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

typeText();



