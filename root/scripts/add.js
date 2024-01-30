const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
var answer = 0;

function generate_equation () {

}

option1.addEventListener("click", function() {
    if(option1.innerHTML == answer) {
        generate_equation();
    } else {
        audio.play();
    }
});

option2.addEventListener("click", function() {
    if(option2.innerHTML == answer) {
        generate_equation();
    } else {
        audio.play();
    }
});

option3.addEventListener("click", function() {
    if(option3.innerHTML == answer) {
        generate_equation();
    } else {
        audio.play();
    }
});