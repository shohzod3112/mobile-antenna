let a = 39;
let bar1 = document.querySelector('.bar-1');
let bar2 = document.querySelector('.bar-2');
let bar3 = document.querySelector('.bar-3');
let bar4 = document.querySelector('.bar-4');
let bar5 = document.querySelector('.bar-5');

console.log(bar1);
if(a > 0) {
    bar1.classList.add('signal-percent');
}

if(a >= 20) {
    bar2.classList.add('signal-percent');
}

if(a >= 40) {
    bar3.classList.add('signal-percent');
}

if(a >= 60) {
    bar4.classList.add('signal-percent');
}

if(a >= 80) {
    bar5.classList.add('signal-percent');
}