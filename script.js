const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currenyActive = 1 ;

next.addEventListener('click',() => {
    currenyActive++;

    if(currenyActive > circles.length){
        currenyActive = circles.length;
    }
    update();
})

prev.addEventListener('click',() => {
    currenyActive--

    if(currenyActive < 1){
        currenyActive = 1; 
    }
    update();

})

function update(){
    circles.forEach((circle,idx)=>{
        if(idx<currenyActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currenyActive === 1) {
        prev.disabled = true
    } else if(currenyActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}