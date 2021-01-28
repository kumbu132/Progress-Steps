const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive =1;

circles.forEach((circle, idx) => {
    circle.addEventListener('click', () => {
        currentActive = idx+1;
        update();
    })
    
});

next.addEventListener('click', () => {
    currentActive < circles.length ? currentActive++ : currentActive;    
    update();
})

prev.addEventListener('click', () => {
    currentActive > 1 ? currentActive-- : currentActive;
    update();
})

function update () {    
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
        
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = `${100 * (actives.length - 1) / (circles.length - 1)}%` ;
    
    currentActive < 2 ? prev.disabled = true : prev.disabled = false;
    currentActive < circles.length ? next.disabled = false : next.disabled = true;    
}