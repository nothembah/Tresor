let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let h5 = document.querySelector('h5');
let read = document.querySelector('.read');
let nextBtn = document.querySelector('.next');

let counter = 0;
function next(){
    if(counter == 0){
        h2.style.display = 'block';
    } else if(counter == 1){
        h3.style.display = 'block';
    } else if(counter == 2){
        h4.style.display = 'block';
    } else if(counter == 3){
        h5.style.display = 'block';
        read.style.display = 'block';
        nextBtn.style.display = 'none';
    }
    console.log(counter);
    counter++;
}