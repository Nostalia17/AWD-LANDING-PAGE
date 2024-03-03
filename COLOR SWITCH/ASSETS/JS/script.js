const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const days = document.getElementsByClassName('day');


let activeBox = box1;
let inactiveBox = box2;



const boxHeight = 300;


for (let i = 0; i < days.length; i++) {
    days[i].addEventListener('click', function() {
        activeBox.style.animation = 'slideUp 1.2s forwards';
        inactiveBox.style.top = '0';
        inactiveBox.style.backgroundColor = window.getComputedStyle(days[i]).backgroundColor;
        inactiveBox.style.animation = 'slideDown 1.2s forwards';


        setTimeout(function() {
            const temp = activeBox;
            activeBox = inactiveBox;
            inactiveBox = temp;
            inactiveBox.style.top = `-${boxHeight}px`;
            inactiveBox.style.animation = '';
            inactiveBox.style.zIndex = '1';
            activeBox.style.zIndex = '2';
        }, 1500);
    });
}
